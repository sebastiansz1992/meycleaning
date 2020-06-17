import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ExperienceRating } from '../models/experience.rating.model';

@Injectable({
  providedIn: 'root'
})
export class MeycleaningService {

  constructor(private firestore: AngularFirestore) {
  }

  obtenerExperiencias() {
    return this.firestore.collection('experienceRating').snapshotChanges();
  }

  crearExperienciaUsuario(experienceUser: ExperienceRating) {
    return this.firestore.collection('experienceRating').add(experienceUser);
  }

}
