MenuMaterials = function(scene){
    var tableauMaterials=[];

    var levelTx = [];

    for(let i=0;i<10; i++){
     // Material pour normal box
     levelTx[i] = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
     levelTx[i].diffuseTexture = new BABYLON.Texture("assets/images/menu/magic.jpg", scene);
     levelTx[i].diffuseTexture.uScale = 1.0;
     levelTx[i].diffuseTexture.vScale = 1.0;
    tableauMaterials.push(levelTx[i]);
    }

  






    return tableauMaterials;
}