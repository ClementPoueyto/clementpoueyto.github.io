/**
 * 
 */
function shuffle(array) {
   return array.sort(function () { return Math.random() - .5 });
}

function range(start, end) {
   var foo = [];
   for (var i = start; i <= end; i++) {
      foo.push(i);
   }
   return foo
}

function symRange(length) {
   start = -(length - 1) / 2
   end = -start
   var foo = [];
   for (let i = start; i <= end; i++) {
      if (i != 0) foo.push(i);
   }
   return foo
}

function incArray(array, inc) {
   for (let i = 0; i < array.length; i++) {
      array[i] += inc
   }
   return array
}

Arena2 = function (game) {

   this.game = game;
   var scene = game
   this.listOfMesh = [];
   this.normalCubes = []
   var arena = this


   // player params
   this.speed = 1.5;
   this.spawn = new BABYLON.Vector3(0, 100, 0);


   //------------------ PARAMS ---------------------//
   this.currentPos = 0;
   arena.currentH = 0;
   var width = 7
   var maxR = 7
   var minR =0
   var normalCube = range(0, 75);
   var destroyMesh = 20

   // UP CUBE
   var upCube = range(75, 80);
   var upCubeSpeed = 0.45
   var upCubeTrigger = 0.5
   arena.upCubes = [];

   // DOWN CUBE
   var downCubeSpeed = 0.4
   var downCube = range(80, 85);
   var downCubeTriggerX = 2
   var downCubeTriggerY = 0.5
   var downCubeTriggerZ = 2
   arena.downCubes = [];

   // Augmente dénivelé
   var hCube = range(85, 86)
   var hCubeInc = 6

   // Réduire dénivelé
   var dCube = range(86, 86)
   var dCubeInc = -6

   // Saut  
   var jumpCube = range(87, 92)
   arena.jumpCubes = []
   var jumpCubeTriggerX = 0.5
   var jumpCubeTriggerY = 0.8
   var jumpCubeTriggerZ = 0.8
   var previousSuperJump = 0

   // SuperSaut
   var superJumpCube = range(92, 92)
   arena.superJumpCube = []

   // meurt
   var dangerCube = range(93, 95)
   arena.dangerCubes = []
   var dangerCubeTriggerX = 0.5
   var dangerCubeTriggerY = 0.8
   var dangerCubeTriggerZ = 0.8

   // Boost
   var boostCube = range(96, 100)
   arena.boostCubes = []
   var boostCubeTriggerX = 0.5
   var boostCubeTriggerY = 0.8
   var boostCubeTriggerZ = 0.8
   //-------------------------------------------------------------------//




   var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);

   // Materials
   var redMat = new BABYLON.StandardMaterial("redMat", scene);
   redMat.emissiveColor = new BABYLON.Color3(1, 0, 0);

   var yellowMat = new BABYLON.StandardMaterial("yellowMat", scene);
   yellowMat.emissiveColor = new BABYLON.Color3(1, 1, 0);

   var greenMat = new BABYLON.StandardMaterial("greenMat", scene);
   greenMat.emissiveColor = new BABYLON.Color3(0, 1, 0);

   var blueMat = new BABYLON.StandardMaterial("blueMat", scene);
   blueMat.emissiveColor = new BABYLON.Color3(0, 0, 1);

   var cyanMat = new BABYLON.StandardMaterial("cyanMat", scene);
   cyanMat.emissiveColor = new BABYLON.Color3(0, 1, 1);

   var temp = new BABYLON.StandardMaterial("cyanMat", scene);
   temp.emissiveColor = new BABYLON.Color3(1, 0, 1);

   var resetJump = function () {
      scene.player.hasJump = false
   }

   function resetArena() {
      arena.currentPos = 0
      arena.currentH = 0
      arena.normalCubes.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.upCubes.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.downCubes.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.jumpCubes.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.superJumpCube.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.dangerCubes.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.boostCubes.forEach(function (mesh) {
         mesh.dispose()
      });
      arena.normalCubes = []
      arena.upCubes = []
      arena.downCubes = []
      arena.jumpCubes = []
      arena.superJumpCube = []
      arena.boostCubes = []
      scene.player.box.position = arena.spawn
      scene.player.box.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0,0,0));

   }

   /**
    * Cube normal statique
    * @param {} position 
    */
   function createNormalBox(position) {
      var mainBox = BABYLON.MeshBuilder.CreateBox("normalBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.actionManager = new BABYLON.ActionManager(scene);
      mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
         { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
         resetJump
      ));
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
      arena.normalCubes.push(mainBox);
      return mainBox
   }

   /**
    * Cube qui monte lorsque l'on est dessus
    * @param {} position 
    */
   function createUpBox(position) {
      var mainBox = BABYLON.MeshBuilder.CreateBox("upBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.actionManager = new BABYLON.ActionManager(scene);
      mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
         { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
         resetJump
      ));
      mainBox.material = redMat
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
      arena.upCubes.push(mainBox);
      return mainBox
   }

   /**
  * Cube qui descend lorsque l'on est dessus
  * @param {} position 
  */
   function createDownBox(position) {
      var mainBox = BABYLON.MeshBuilder.CreateBox("downBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.actionManager = new BABYLON.ActionManager(scene);
      mainBox.actionManager.registerAction(new BABYLON.ExecuteCodeAction(
         { trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: scene.player.box },
         resetJump
      ));
      mainBox.material = yellowMat
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
      arena.downCubes.push(mainBox);
      return mainBox
   }

   /**
 * Cube super saut
 * @param {} position 
 */
   function createJumpBox(position) {
      var mainBox = BABYLON.MeshBuilder.CreateBox("jumpBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.material = greenMat
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
      arena.jumpCubes.push(mainBox);
      return mainBox
   }
   function createSuperJumpBox(position) {
      var mainBox = BABYLON.MeshBuilder.CreateBox("SuperjumpBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.material = blueMat
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
      arena.superJumpCube.push(mainBox);
      return mainBox
   }
   function createDangerBox(position) {
      var mainBox = BABYLON.MeshBuilder.CreateBox("SuperjumpBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.material = cyanMat
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0 }, scene);
      arena.dangerCubes.push(mainBox);
      return mainBox


   }

   function createBoostBox(position) {
      position.y += 13
      var mainBox = BABYLON.MeshBuilder.CreateBox("SuperjumpBox", { size: 3 }, scene);
      mainBox.scaling.y = 3;
      mainBox.scaling.x = 4;
      mainBox.scaling.z = 4;
      mainBox.position = position
      mainBox.material = temp
      mainBox.checkCollisions = true;
      mainBox.physicsImpostor = new BABYLON.PhysicsImpostor(mainBox, BABYLON.PhysicsImpostor.NoImpostor, { mass: 0, restitution: 0 }, scene);
      arena.boostCubes.push(mainBox);
      arena.listOfMesh.push(mainBox)
      return mainBox


   }






   function createRandomItem(position) {
      let r = Math.floor(Math.random() * 100)

      if (normalCube.includes(r)) {
         createNormalBox(position)

      } else if (upCube.includes(r)) {
         createUpBox(position)

      } else if (downCube.includes(r)) {
         createDownBox(position)
      } else if (hCube.includes(r)) {
         arena.currentH += hCubeInc
         createNormalBox(position)
      } else if (dCube.includes(r)) {
         arena.currentH += dCubeInc
         createNormalBox(position)
      } else if (jumpCube.includes(r)) {
         createJumpBox(position)
      } else if (superJumpCube.includes(r)) {
         createSuperJumpBox(position)
      } else if (dangerCube.includes(r)) {
         createDangerBox(position)
      } else if (boostCube.includes(r)) {
         createBoostBox(position)
      }

   }


   arena.cursor = 0;

   arena.sameColumnCount = 0;

   function createRows() {
      pos = symRange(width)
      pos = shuffle(pos)
      arena.sameColumnCount++;

      if(arena.sameColumnCount > 25){
         arena.cursor+=(Math.round(Math.random()) == 0 ? -1 : 1);
         console.log(arena.cursor);
         createRandomItem(new BABYLON.Vector3((arena.currentPos-1) * 13, arena.currentH, arena.cursor*13));
         arena.sameColumnCount = 0;
      }
      createRandomItem(new BABYLON.Vector3(arena.currentPos * 13, arena.currentH, arena.cursor*13))

      // for (let i = 0; i < Math.floor(Math.random() * maxR + minR); i++) {
      //    pos = shuffle(pos);
      //    createRandomItem(new BABYLON.Vector3(arena.currentPos * 13, arena.currentH, pos.pop() * 13));
      // }
   }

   scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(
         {
            trigger: BABYLON.ActionManager.OnEveryFrameTrigger,
         },
         function () {
            // console.log(arena.currentPos)


            while (scene.player.box.position.x > arena.currentPos * 13 - 30 * 13) {
               createRows();
               arena.currentPos += 1
            }
            arena.normalCubes.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13) {
                  mesh.dispose()
               }
            });
            arena.upCubes.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13) {
                  mesh.dispose()
               }
               if (scene.player.box.position.x > mesh.position.x - upCubeTrigger * 13)
                  mesh.position.y += upCubeSpeed

            });
            arena.downCubes.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13)
                  mesh.dispose()
               if ((scene.player.box.position.x > mesh.position.x - downCubeTriggerX * 13)
                  && (mesh.position.y + downCubeTriggerY * 13 > scene.player.box.position.y)) {
                  mesh.position.y -= downCubeSpeed
               }
            });
            arena.jumpCubes.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13)
                  mesh.dispose()
               if (((scene.player.box.position.x < mesh.position.x + jumpCubeTriggerX * 13 && scene.player.box.position.x > mesh.position.x - jumpCubeTriggerX * 13))
                  && (mesh.position.y + jumpCubeTriggerY * 13 > scene.player.box.position.y)
                  && ((mesh.position.z + jumpCubeTriggerZ * 13 > scene.player.box.position.z) && (scene.player.box.position.z > mesh.position.z - jumpCubeTriggerZ * 13))
                  && new Date().getTime() - previousSuperJump > 1) {
                  var forceDirection = new BABYLON.Vector3(0, 1, 0);
                  var forceMagnitude =  800;
                  var contactLocalRefPoint = BABYLON.Vector3.Zero();
                  scene.player.box.physicsImpostor.applyForce(forceDirection.scale(forceMagnitude), scene.player.box.getAbsolutePosition().add(contactLocalRefPoint));
                  previousSuperJump = new Date().getTime()
               }
            });
            arena.superJumpCube.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13)
                  mesh.dispose()
               if (((scene.player.box.position.x < mesh.position.x + jumpCubeTriggerX * 13 && scene.player.box.position.x > mesh.position.x - jumpCubeTriggerX * 13))
                  && (mesh.position.y + jumpCubeTriggerY * 13 > scene.player.box.position.y)
                  && ((mesh.position.z + jumpCubeTriggerZ * 13 > scene.player.box.position.z) && (scene.player.box.position.z > mesh.position.z - jumpCubeTriggerZ * 13))
                  && new Date().getTime() - previousSuperJump > 1) {
                  var forceDirection = new BABYLON.Vector3(0, 1, 0);
                  var forceMagnitude = 1400;
                  var contactLocalRefPoint = BABYLON.Vector3.Zero();
                  scene.player.box.physicsImpostor.applyForce(forceDirection.scale(forceMagnitude), scene.player.box.getAbsolutePosition().add(contactLocalRefPoint));
                  previousSuperJump = new Date().getTime()
               }
            });
            arena.dangerCubes.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13){
                  mesh.dispose()
               }
               if (((scene.player.box.position.x < mesh.position.x + dangerCubeTriggerX * 13 && scene.player.box.position.x > mesh.position.x - dangerCubeTriggerX * 13))
                  && (mesh.position.y + dangerCubeTriggerY * 13 > scene.player.box.position.y)
                  && ((mesh.position.z + dangerCubeTriggerZ * 13 > scene.player.box.position.z) && (scene.player.box.position.z > mesh.position.z - dangerCubeTriggerZ * 13))) {
                     //resetArena()
                  
               }
            });
            arena.boostCubes.forEach(function (mesh) {
               if (scene.player.box.position.x > mesh.position.x + destroyMesh * 13)
                  mesh.dispose()
               if (((scene.player.box.position.x < mesh.position.x + boostCubeTriggerX * 13 && scene.player.box.position.x > mesh.position.x - boostCubeTriggerX * 13))
                  && (mesh.position.y + boostCubeTriggerY * 13 > scene.player.box.position.y)
                  && ((mesh.position.z + boostCubeTriggerZ * 13 > scene.player.box.position.z) && (scene.player.box.position.z > mesh.position.z - boostCubeTriggerZ * 13))) {
                  var forceDirection = new BABYLON.Vector3(1, 1, 0);
                  var forceMagnitude = 400;
                  var contactLocalRefPoint = BABYLON.Vector3.Zero();
                  scene.player.box.physicsImpostor.applyForce(forceDirection.scale(forceMagnitude), scene.player.box.getAbsolutePosition().add(contactLocalRefPoint));
               }
            });

         }));


   this.limit = BABYLON.Mesh.CreateGround("limit", 10000 * 13, 60 * 13, 100 * 13, scene);
   this.limit.position = new BABYLON.Vector3(0, -20, 0);
   this.end = BABYLON.MeshBuilder.CreateBox("box1", { size: 3 }, scene);


};