import tplListItem from '../template/list-item.js';
import { secondToTime, randomOrder } from './utils';
import { handleAudioOption } from './options';

export function addToList(player, audios) {
    player.events.trigger('listadd', {
        audios: audios,
    });
    audios = handleAudioOption(audios);

    const wasSingle = !(player.list.audios.length > 1);
    const wasEmpty = player.list.audios.length === 0;

    player.template.listOl.innerHTML += tplListItem({
        theme: player.options.theme,
        audio: audios,
        index: player.list.audios.length + 1
    });

    player.list.audios = player.list.audios.concat(audios);

    if (wasSingle && player.list.audios.length > 1) {
        player.container.classList.add('aplayer-withlist');
    }

    player.randomOrder = randomOrder(player.list.audios.length);
    player.template.listCurs = player.container.querySelectorAll('.aplayer-list-cur');

    player.template.listCurs[player.list.audios.length - 1].style.backgroundColor = audios.theme || player.options.theme;

    if (wasEmpty) {
        if (player.options.order === 'random') {
            player.list.switch(player.randomOrder[0]);
        }
        else {
            player.list.switch(0);
        }
    }
}

export function removeFromList(player, index) {
    player.events.trigger('listremove', {
        index: index,
    });
    if (player.list.audios[index]) {
        if (player.list.audios.length > 1) {
            const list = player.container.querySelectorAll('.aplayer-list li');
            list[index].remove();

            player.list.audios.splice(index, 1);
            player.lrc && player.lrc.remove(index);

            if (index === player.list.index) {
                if (player.list.audios[index]) {
                    player.list.switch(index);
                }
                else {
                    player.list.switch(index - 1);
                }
            }
            if (player.list.index > index) {
                player.list.index--;
            }

            for (let i = index; i < list.length; i++) {
                list[i].getElementsByClassName('aplayer-list-index')[0].textContent = i;
            }
            if (player.list.audios.length === 1) {
                player.container.classList.remove('aplayer-withlist');
            }

            player.template.listCurs = player.container.querySelectorAll('.aplayer-list-cur');
        }
        else {
            clearList(player);
        }
    }
}

export function clearList(player) {
    player.events.trigger('listclear');
    player.list.index = 0;
    player.container.classList.remove('aplayer-withlist');
    player.pause();
    player.list.audios = [];
    player.lrc && player.lrc.clear();
    player.audio.src = '';
    player.template.listOl.innerHTML = '';
    player.template.pic.style.backgroundImage = '';
    player.theme(player.options.theme, player.list.index, false);
    player.template.title.innerHTML = 'No audio';
    player.template.author.innerHTML = '';
    player.bar.set('loaded', 0, 'width');
    player.template.dtime.innerHTML = secondToTime(0);
}

export default (player) => {
    let index_ = 0;
    let audios_ = player.options.audio;

    player.template.list.addEventListener('click', (e) => {
        let target;
        if (e.target.tagName.toUpperCase() === 'LI') {
            target = e.target;
        }
        else {
            target = e.target.parentElement;
        }
        const audioIndex = parseInt(target.getElementsByClassName('aplayer-list-index')[0].innerHTML) - 1;
        if (audioIndex !== index_) {
            switch_(audioIndex);
            player.play();
        }
        else {
            player.toggle();
        }
    });


    function show() {
        player.events.trigger('listshow');
        player.template.list.classList.remove('aplayer-list-hide');
        const listItemElement = getCurrentListItem();
        player.template.listOl.scrollTop = listItemElement.offsetTop
    }

    function hide() {
        player.events.trigger('listhide');
        player.template.list.classList.add('aplayer-list-hide');
    }

    function toggle() {
        if (!player.template.list.classList.contains('aplayer-list-hide')) {
            hide();
        }
        else {
            show();
        }
    }

    function getCurrentListItem() {
        return player.container.querySelectorAll('.aplayer-list li')[index_];
    }

    function switch_(index) {
        player.events.trigger('listswitch', {
            index: index,
        });

        if (typeof index !== 'undefined' && audios_[index]) {
            index_ = index;

            const audio = audios_[index_];

            // set html
            player.template.pic.style.backgroundImage = audio.cover ? `url('${audio.cover}')` : '';
            player.theme(audios_[index_].theme || player.options.theme, index_, false);
            player.template.title.innerHTML = audio.name;
            player.template.author.innerHTML = audio.artist ? ' - ' + audio.artist : '';

            const light = player.container.getElementsByClassName('aplayer-list-light')[0];
            if (light) {
                light.classList.remove('aplayer-list-light');
            }
            const listItemElement = getCurrentListItem();
            listItemElement.classList.add('aplayer-list-light');
            listItemElement.parentNode.scrollTop = listItemElement.offsetTop;

            player.setAudio(audio);

            player.lrc && player.lrc.switch(index_);
            player.lrc && player.lrc.update(0);

            // set duration time
            if (player.duration !== 1) {           // compatibility: Android browsers will output 1 at first
                player.template.dtime.innerHTML = secondToTime(player.duration);
            }
        }
    }

    return {
        get index() {
            return index_;
        },
        set index(index) {
            index_ = index;
        },
        get audios() {
            return audios_;
        },
        set audios(audios) {
            audios_ = audios;
        },
        show,
        hide,
        toggle,
        switch: switch_,
    };
}
