// importation des classes
import { TestBed } from '@angular/core/testing';
import { CrudService } from './crud.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrudService', () => {
  let service: CrudService;
  let mockHttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: []
    });
    service = TestBed.inject(CrudService);
    mockHttpTestingController = TestBed.inject(HttpTestingController)
  });

  // On vérifie les détails d'une box
  it('Requete box détail', () => {
    // On passe à la fonction Url, l'adresse de notre API en spécifiant la box avec l'id 1
    let Url = 'http://localhost:3000/boxes/' + 1;

    service
      //On appelle notre fonction getBox avec en paramètre : 1
      .getBox('1')
      // La donnée est passée en argument à Data, passé à la méthode subscribe
      .subscribe(data => {
        // Ici on compare notre data["nom"]  à la string "Tasty Blend"
        expect(data['nom']).toEqual("Tasty Blend")
      });

    const req = mockHttpTestingController.expectOne(Url);
    expect(req.request.method).toEqual('GET');

    // Construction des données simulant la réponse
    let mockedResponse = {
      nom: 'Tasty Blend',
    };
    // On lance la réponse gracé à la méthode flush
    req.flush(mockedResponse);

  });
});
