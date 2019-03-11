import { dataShare } from './../../services/data-sharing';
import { CanActivate,ActivatedRouteSnapshot ,RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class accessing implements CanActivate{
    constructor(private _dataShare:dataShare,private router:Router){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): boolean {
        if( this._dataShare.isDataAvailable()){
            return true;
        }else{
            console.log('accessing failed');
            this.router.navigate(['/']);
        }
      }
}