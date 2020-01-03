import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { plainToClass } from 'class-transformer';
import { Model } from '../models/model';
import { ICrud } from './icrud.interface';

export abstract class ServiceFirebase<T extends Model> implements ICrud<T> {
    ref: AngularFirestoreCollection<T>;

    constructor(
        protected type: { new(): T },
        protected firestore: AngularFirestore,
        public path: string
    ) {
        this.ref = this.firestore.collection<T>(this.path);
    }

    get(id: string): Observable<T> {
        let doc = this.ref.doc<T>(id);
        return doc.get().pipe(
            map(snapshot => this.docToClass(snapshot))
        );
    }

    docToClass(snapshotDoc): T {
        let obj = {
            id: snapshotDoc.id,
            ...(snapshotDoc.data() as T)
        }
        let typed = plainToClass(this.type, obj)
        return typed;
    }

    list(): Observable<T[]> {
        return this.ref.valueChanges()
    }

    createOrUpdate(obj: T): any {
        this.ref.add(obj).then(res => {
            obj.id = res.id;
            this.ref.doc(res.id).set(obj);
        })
    }

    delete(id: string): Promise<void> {
        return this.ref.doc(id).delete();
    }


}