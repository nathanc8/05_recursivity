type Fichier = {
    nom: string;
};

type Dossier = {
    nom: string;
    contenu: Array<Dossier | Fichier>;
};

const dossierPrincipal: Dossier = {
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

//const folderArray: string[] = [];

function recursiveFolderDisplay(folder: Dossier | Fichier) {
    if ("contenu" in folder) {
        console.log("🗂️ " + folder.nom);
        for (let obj of folder.contenu) {
            recursiveFolderDisplay(obj);
        }
    } else {
        console.log("📑 " + folder.nom);
    }
}

recursiveFolderDisplay(dossierPrincipal);

/* function recursiveFolderDisplay2(
    folder: Dossier | Fichier,
    result: Array<string>
) {
    if ("contenu" in folder) {
        result.push(folder.nom);
        for (let obj of folder.contenu) {
            recursiveFolderDisplay2(obj, result);
        }
    } else {
        result.push(folder.nom);
    }
} */

//recursiveFolderDisplay2(dossierPrincipal, []);

/* function recursiveFolderDisplay3(folder: Dossier, result: Array<string>) {
  if (!folder?.contenu) return [...result, folder.nom];
  return [folder?.nom,...folder?.contenu?.flatMap((obj) => recursiveFolderDisplay3(obj, result)),];
} */
