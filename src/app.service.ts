import { Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';

@Injectable()
export class AppService {
  constructor(private db: DbService) {}

  getHello() {
    try {
      const user = this.db.user.findMany();
      return user;
    } catch (err) {
      return err;
    }
  }
}
