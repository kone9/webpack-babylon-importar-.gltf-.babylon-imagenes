import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

//para que funcionen los mudos glb o babylon hay que importarlos
import VueltaAlMundoAnimada from './assets/model/VueltaAlMundoAnimada.glb';


export class VueltaAlMundo
{
    private _mesh: BABYLON.Mesh;

    constructor(scene:BABYLON.Scene)
    {
        BABYLON.SceneLoader.ImportMesh("", "./assets/model/", "VueltaAlMundoAnimada.glb", scene,
            function (meshes,particle,Skeleton)
            {
                this._mesh = scene.getNodeByName("VueltaAlMundoAnimada") as BABYLON.Mesh;
            }
        );
    }
    public get mesh(): BABYLON.Mesh {
        return this._mesh;
    }
    public set mesh(value: BABYLON.Mesh) {
        this._mesh = value;
    }
     
    
}