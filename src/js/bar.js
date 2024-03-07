export default (template) => {
    // type: volume, played, loaded
    const elements = { ...template };

    /**
     * Update progress
     *
     * @param {String} type - Point out which bar it is
     * @param {Number} percentage
     * @param {String} direction - Point out the direction of this bar, Should be height or width
     */
    function set(type, percentage, direction) {
        percentage = Math.max(percentage, 0);
        percentage = Math.min(percentage, 1);
        elements[type].style[direction] = percentage * 100 + '%';
    }

    function get(type, direction) {
        return parseFloat(elements[type].style[direction]) / 100;
    }
    return { get, set }
}
