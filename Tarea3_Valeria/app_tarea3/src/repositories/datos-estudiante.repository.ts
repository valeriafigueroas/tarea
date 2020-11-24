import {DefaultCrudRepository} from '@loopback/repository';
import {DatosEstudiante, DatosEstudianteRelations} from '../models';
import {ConectDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DatosEstudianteRepository extends DefaultCrudRepository<
  DatosEstudiante,
  typeof DatosEstudiante.prototype.id,
  DatosEstudianteRelations
> {
  constructor(
    @inject('datasources.conect') dataSource: ConectDataSource,
  ) {
    super(DatosEstudiante, dataSource);
  }
}
