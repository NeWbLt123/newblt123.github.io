(function() {
    'use strict';

    var titleInput = document.getElementById('editpane_title');

    var wordsToReplace = [
        {
            "original": "anamorphic ",
            "final": ""
        }, {
            "original": "Anamorphic ",
            "final": ""
        }, {
            "original": "movie cash ",
            "final": ""
        }, {
            "original": "Movie cash ",
            "final": ""
        }, {
            "original": ", Sensormatic",
            "final": ""
        }, {
            "original": ", sensormatic",
            "final": ""
        }, {
            "original": " Sensormatic",
            "final": ""
        }, {
            "original": " sensormatic",
            "final": ""
        }, {
            "original": "Sensormatic",
            "final": ""
        }, {
            "original": "sensormatic",
            "final": ""
        }, {
            "original": ", Checkpoint Security Tag",
            "final": ""
        }, {
            "original": ", Spa Cash",
            "final": ""
        }, {
            "original": ", Pan  Scan Edition",
            "final": ""
        }, {
            "original": ", Checkpoint",
            "final": ""
        }, {
            "original": ", Movie Cash",
            "final": ""
        }, {
            "original": " Checkpoint",
            "final": ""
        }, {
            "original": "Full Screen Edition",
            "final": "Full Screen"
        }, {
            "original": "Full Screen Version",
            "final": "Full Screen"
        }, {
            "original": " Widescreen Version",
            "final": "Widescreen"
        }, {
            "original": "Widescreen Edition",
            "final": "Widescreen"
        }, {
            "original": "Full Frame",
            "final": "Full Screen"
        }, {
            "original": " Movie Cash",
            "final": ""
        }, {
            "original": ", Includes Digital Copy UltraViolet",
            "final": ""
        }, {
            "original": " CASE IS NEW",
            "final": ""
        }, {
            "original": ", Checkpoint",
            "final": ""
        }
    ];

    setInterval(function() {
        wordsToReplace.forEach(function(w) {
            if (titleInput.value.indexOf(w.original) > -1) {
                titleInput.value = titleInput.value.split(w.original).join(w.final);
            }
        });
    }, 2000);

})();
