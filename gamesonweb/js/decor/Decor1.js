Decor1 = function (scene) {
    var materialBuilding = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialBuilding.diffuseTexture = new BABYLON.Texture('assets/images/decor1/building.jpg', scene)
    materialBuilding.diffuseTexture.uScale = 1.0
    materialBuilding.diffuseTexture.vScale = 1.0
    var building = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
    building.material = materialBuilding

    building.isVisible=false;
    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            buildingInstance=building.createInstance()
            buildingInstance.position = new BABYLON.Vector3(i * 300, 0, 200)
        }
    }
    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            buildingInstance=building.createInstance()
            buildingInstance.position = new BABYLON.Vector3(i * 300, 0, -140)
        }
    }

    var materialBuilding2 = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialBuilding2.diffuseTexture = new BABYLON.Texture('assets/images/decor1/building2.jpg', scene)
    materialBuilding2.diffuseTexture.uScale = 1.0
    materialBuilding2.diffuseTexture.vScale = 1.0
    var materialBuilding3 = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialBuilding3.diffuseTexture = new BABYLON.Texture('assets/images/decor1/building3.jpg', scene)
    materialBuilding3.diffuseTexture.uScale = 1.0
    materialBuilding3.diffuseTexture.vScale = 1.0
    
    var building2 = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
    building2.material = materialBuilding

    building2.isVisible=false;
    building2.material = materialBuilding2

    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            buildingInstance=building2.createInstance()
            buildingInstance.position = new BABYLON.Vector3(i * 300 + 150, 0, 220)
        }
    }
    var building3 = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
    building3.material = materialBuilding
    building3.isVisible=false;
    building.material = materialBuilding3

    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            buildingInstance=building3.createInstance()
            buildingInstance.position = new BABYLON.Vector3(i * 300 + 150, 0, -100)
        }
    }

    var plane = BABYLON.MeshBuilder.CreatePlane('plane', { height: 50, width: 5500 }, scene)
    plane.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD)
    plane.position = new BABYLON.Vector3(2500, -100, 100)
    var materialRoad = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialRoad.diffuseTexture = new BABYLON.Texture('assets/images/decor1/road.jpg', scene)
    materialRoad.diffuseTexture.uScale = 100.0
    materialRoad.diffuseTexture.vScale = 1.0
    plane.material = materialRoad

    var plane2 = BABYLON.MeshBuilder.CreatePlane('plane', { height: 50, width: 5500 }, scene)
    plane2.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD)
    plane2.position = new BABYLON.Vector3(2500, -100, -50)
    plane2.material = materialRoad

    var ground = BABYLON.MeshBuilder.CreatePlane('plane', { height: 600, width: 5500 }, scene)
    ground.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD)
    ground.position = new BABYLON.Vector3(2500, -110, 50)
    //Material pour le sol
    var materialFloor = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialFloor.diffuseColor = new BABYLON.Color3.Gray()
    ground.material = materialFloor

    var skybox = BABYLON.MeshBuilder.CreateBox('skyBox', { size: 6000.0 }, scene)
    skybox.infiniteDistance = true;
    var skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/sky/skybox', scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    skybox.material = skyboxMaterial




    loaderDecor = BABYLON.SceneLoader.Append('assets/model/', 'scene1bin.glb', scene, function (scene) {
        // do something with the scene
    })
    loaderDecor.onMeshLoaded = function (mesh) {
        mesh.position = new BABYLON.Vector3(-300, -100, 0)


        for (var index = 0; index < 15; index++) {
            var newInstance = mesh.createInstance("i" + index);
            // Here you could change the properties of your individual instance,
            // for example to form a diagonal line of instances:
            newInstance.scaling = new BABYLON.Vector3(50, 50, 50)
            newInstance.position.x = index*300;
            newInstance.position.y = -80;
            newInstance.position.z = 100;
            // See below for more details on what can be changed.
        }
    }






}