const Utils = {
    calculateNumber: function(type, a, b) {
        const calcul = {
            'SUM': Math.round(a) + Math.round(b),
            'SUBTRACT': Math.round(a) - Math.round(b),
            'DIVIDE': Math.round(a) / Math.round(b),
        };
        if (type === 'DIVIDE' && Math.round(b) === 0) {
            return 'Error';
        }
        return calcul[type];
    }
};

module.exports = Utils;
