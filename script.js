var dossierPrincipal = {
    nom: "Ada",
    contenu: [
        {
            nom: "Projets collectifs Ada",
            contenu: [
                {
                    nom: "Pico8",
                    contenu: [
                        {
                            nom: "mariokart.p8",
                        },
                    ],
                },
                {
                    nom: "Dataviz",
                    contenu: [
                        {
                            nom: "index.html",
                        },
                        {
                            nom: "script.js",
                        },
                    ],
                },
            ],
        },
        { nom: "CV.pdf" },
        {
            nom: "Projets persos",
            contenu: [
                {
                    nom: "Portfolio",
                    contenu: [
                        {
                            nom: "index.html",
                        },
                        {
                            nom: "script.js",
                        },
                    ],
                },
            ],
        },
    ],
};
var folderArray = [];
function recursiveFolderDisplay(folder) {
    if ("contenu" in folder) {
        folderArray.push(folder.nom);
        for (var _i = 0, _a = folder.contenu; _i < _a.length; _i++) {
            var obj = _a[_i];
            recursiveFolderDisplay(obj);
        }
    }
    else {
        folderArray.push(folder.nom);
    }
}
recursiveFolderDisplay(dossierPrincipal);
console.log(folderArray);
