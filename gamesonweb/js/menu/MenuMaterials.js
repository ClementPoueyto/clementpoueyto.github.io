MenuMaterials = function(scene){
    var tableauMaterials=[];

    var levelTx = [];

    for(let i=0;i<3; i++){
     // Material pour normal box
     
     levelTx[i] = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
     levelTx[i].diffuseTexture = new BABYLON.Texture("assets/images/menu/green.jpg", scene);
     levelTx[i].emissiveColor = BABYLON.Color3.Green();
     levelTx[i].diffuseTexture.uScale = 1.0;
     levelTx[i].diffuseTexture.vScale = 1.0;
    tableauMaterials.push(levelTx[i]);
    }
    for(let i=3;i<6; i++){
        // Material pour normal box
        
        levelTx[i] = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
        levelTx[i].diffuseTexture = new BABYLON.Texture("assets/images/menu/brown.jpg", scene);
        levelTx[i].emissiveColor = new BABYLON.Color3(165/255,42/255,42/255);
        levelTx[i].diffuseTexture.uScale = 1.0;
        levelTx[i].diffuseTexture.vScale = 1.0;
       tableauMaterials.push(levelTx[i]);
       }
       for(let i=6;i<9; i++){
        // Material pour normal box
        
        levelTx[i] = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
        levelTx[i].diffuseTexture = new BABYLON.Texture("assets/images/menu/blue.jpg", scene);
        levelTx[i].emissiveColor = BABYLON.Color3.Blue();
        levelTx[i].diffuseTexture.uScale = 1.0;
        levelTx[i].diffuseTexture.vScale = 1.0;
       tableauMaterials.push(levelTx[i]);
       }

  






    return tableauMaterials;
}