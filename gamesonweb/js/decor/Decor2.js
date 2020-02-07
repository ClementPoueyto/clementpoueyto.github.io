Decor2=function(scene){
    var materialWood = new BABYLON.StandardMaterial("woodtexture", scene);
    materialWood.diffuseTexture = new BABYLON.Texture("assets/images/decor2/wood.jpg", scene);
    materialWood.diffuseTexture.uScale = 1.0;
    materialWood.diffuseTexture.vScale = 1.0;

    var materialLeaf = new BABYLON.StandardMaterial("leaftexture", scene);
    materialLeaf.diffuseTexture = new BABYLON.Texture("assets/images/decor1/grass.jpg", scene);
    materialLeaf.diffuseTexture.uScale = 1.0;
    materialLeaf.diffuseTexture.vScale = 1.0;

    for(let i=0; i<100;i++){
        let z =getRandomInt(30);
        var tree = QuickTreeGenerator(15, 10, 5, materialWood, materialLeaf, scene);
        tree.position= new BABYLON.Vector3(i*60,-100,-100-z);
        var tree2 = QuickTreeGenerator(15, 10, 5, materialWood, materialLeaf, scene);
        tree2.position= new BABYLON.Vector3(i*60,-100,-80+z);
      
    }
    for(let i=0; i<100;i++){
        let z =getRandomInt(30);
        var tree = QuickTreeGenerator(15, 10, 5, materialWood, materialLeaf, scene);
        tree.position= new BABYLON.Vector3(i*60,-100,100+z);
        var tree2 = QuickTreeGenerator(15, 10, 5, materialWood, materialLeaf, scene);
        tree2.position= new BABYLON.Vector3(i*60,-100,80+z);

    }


    var ground = BABYLON.MeshBuilder.CreatePlane("plane", {height:400, width: 5500}, scene);
    ground.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD);
    ground.position=new BABYLON.Vector3(2500,-110,0);
    //Material pour le sol
    var groundMaterial = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("assets/images/decor1/grass.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 1000.0;
    groundMaterial.diffuseTexture.vScale = 100.0;
    ground.material = groundMaterial;
}