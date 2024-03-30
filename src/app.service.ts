import { Injectable } from '@nestjs/common';
import { DbService } from './db/db.service';

@Injectable()
export class AppService {
  constructor(private db: DbService) {}

  async getHello() {
    try {
      // Buscar el usuario por defecto
      let user = await this.db.user.findFirst({
        where: { name: 'Usuario por defecto' },
      });

      // Si el usuario por defecto no existe, crearlo
      if (!user) {
        user = await this.db.user.create({
          data: {
            name: 'Usuario por defecto',
            // Agrega aquí otros campos necesarios
          },
        });
      }

      return user;
    } catch (err) {
      return err;
    }
  }
}
