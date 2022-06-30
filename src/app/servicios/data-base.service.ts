import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  // storageRef = firebase.storage().ref();


  constructor( private db:AngularFirestore) { }

  // async uploadImage(ruta:string ,nombre:string, imgBase64:any){
  //   try {
  //     let response = await this.storageRef.child(ruta + "/"+ nombre).putString(imgBase64,'data_url');
  //     return await response.ref.getDownloadURL();
  //   } catch (error) {
  //     console.log(error);
  //     return error
  //   }
  // }

  async alta(objeto : any, nombreColeccion:string){
    try {
      return await this.db.collection(nombreColeccion).add(objeto);
    } catch (error) {
      console.log('Error al realizar alta a Firebase: ', error);
      return error;
    }
  }

  async delete(collectionName:string , id:string) {
    try {
      return await this.db.collection(collectionName).doc(id).delete();
    } catch (error) {
      console.log("Error al realizar el delete: ", error)
    }
  }

  async getCollection(nombreColeccion:string){
    try {
      return await this.db.collection(nombreColeccion).snapshotChanges();
    } catch (error) {
      console.log('Error al obtener los objetos de Firebase: ', error);
      return error;
    }
  }

  async getCollectionByField(collectionName:string, operator: '<' | '>' | '==' | '<=' | '>=', field:string ,objectName:string){
    try {
      return await this.db.collection(collectionName, ref => ref.where(field, operator, objectName)).valueChanges();
    } catch (error) {
      return error
    }
  }

  async getDocById(collectionName:string, id:string) {
    try {
      return await this.db.collection(collectionName).doc(id).get();
    } catch (error) {
      console.log("Error al obtener el documento por el id: ", error);
      return error;
    }
  }


  async update(collectionName:string, id:string, dato:any) {
    try {
      return await this.db.collection(collectionName).doc(id).set(dato);
    } catch (error) {
      console.log("Error al realizar el update: ", error)
    }
  }

  // //Crea el ID con que se va a grabar la colección.
  // async getId(){
  //   return await this.db.createId();
  // }
}
