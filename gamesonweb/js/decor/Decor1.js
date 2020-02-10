Decor1 = function (scene) {
    var materialBuilding = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialBuilding.diffuseTexture = new BABYLON.Texture('assets/images/decor1/building.jpg', scene)
    materialBuilding.diffuseTexture.uScale = 1.0
    materialBuilding.diffuseTexture.vScale = 1.0
    var materialBuilding3 = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialBuilding3.diffuseTexture = new BABYLON.Texture('assets/images/decor1/building3.jpg', scene)
    materialBuilding3.diffuseTexture.uScale = 1.0
    materialBuilding3.diffuseTexture.vScale = 1.0
    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            var building = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
            building.position = new BABYLON.Vector3(i * 300, 0, 200)
            building.material = materialBuilding
        }
    }
    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {

            var building = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
            building.position = new BABYLON.Vector3(i * 300, 0, -140)
            building.material = materialBuilding3
        }
    }

    var materialBuilding2 = new BABYLON.StandardMaterial('NormalBoxTexture', scene)
    materialBuilding2.diffuseTexture = new BABYLON.Texture('assets/images/decor1/building2.jpg', scene)
    materialBuilding2.diffuseTexture.uScale = 1.0
    materialBuilding2.diffuseTexture.vScale = 1.0
    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            var building = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
            building.position = new BABYLON.Vector3(i * 300 + 150, 0, 250)
            building.material = materialBuilding2
        }
    }
    for (let i = 0; i < 17; i++) {
        if (Math.round(Math.random()) == 0) {
            var building = BABYLON.MeshBuilder.CreateBox('box', { height: 200, width: 90, depth: 40 }, scene)
            building.position = new BABYLON.Vector3(i * 300 + 150, 0, -100)
            building.material = materialBuilding2
        }
    }

    var plane = BABYLON.MeshBuilder.CreatePlane('plane', { height: 50, width: 5500 }, scene)
    plane.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD)
    plane.position = new BABYLON.Vector3(2500, -100, 150)
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

    var skybox = BABYLON.MeshBuilder.CreateBox('skyBox', { size: 10000.0 }, scene)
    skybox.position = new BABYLON.Vector3(4500, 15 * 13, 0)
    var skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/sky/skybox', scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    skybox.material = skyboxMaterial

    for (let i = 0; i < 1 / 88; i++) {
        loader = BABYLON.SceneLoader.Append('assets/temp/', 'scene1.glb', scene, function (scene) {
            // do something with the scene
        })

        loader.onMeshLoaded = function (mesh) {
            mesh.position = new BABYLON.Vector3(i * 88, -105, 55)
            mesh.scaling = new BABYLON.Vector3(4, 4, 5)
        }
    }
  





}