MenuMaterials = function(scene){
    var tableauMaterials=[];

     // Material pour normal box
     var level1 = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
     level1.diffuseTexture = new BABYLON.Texture("assets/images/grass.jpg", scene);
     level1.diffuseTexture.uScale = 1.0;
     level1.diffuseTexture.vScale = 1.0;
    tableauMaterials.push(level1);

    var level2 = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    level2.diffuseTexture = new BABYLON.Texture("assets/images/sky.jpg", scene);
    level2.diffuseTexture.uScale = 1.0;
    level2.diffuseTexture.vScale = 1.0;
   tableauMaterials.push(level2);

   var level3 = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
   level3.diffuseTexture = new BABYLON.Texture("assets/images/magic.jpg", scene);
   level3.diffuseTexture.uScale = 1.0;
   level3.diffuseTexture.vScale = 1.0;
   tableauMaterials.push(level3);



    return tableauMaterials;
}