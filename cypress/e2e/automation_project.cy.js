
describe('API test', () => {
  it('returns the count of users by gender', () => {
    cy.request({
      method: 'POST',
      url: 'https://census-toy.nceng.net/prod/toy-census',
      body: {
        actionType: 'CountByGender',
        users: [
          {
            gender: 'female',
            name: {
              title: 'miss',
              first: 'lorraine',
              last: 'bryant',
            },
            location: {
              street: '4422 harrison ct',
              city: 'gladstone',
              state: 'tasmania',
              postcode: 3294,
            },
            email: 'lorraine.bryant@example.com',
            login: {
              username: 'smallduck444',
              password: 'aaron',
              salt: 'fYBp4g4a',
              md5: '5d0785427febd6d262f00929c10247e7',
              sha1: 'a12a6925740eefebebcbc79add949fa108a78bf0',
              sha256:
                '61a79aebd11cd5910dd9e77dd49b3dd11df2b4b397e328697f33b86e5b082b84',
            },
            dob: '1956-09-17 02:13:36',
            registered: '2009-05-03 14:40:51',
            phone: '00-3540-6154',
            cell: '0498-678-691',
            id: {
              name: 'TFN',
              value: '377488473',
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/38.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/38.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/38.jpg',
            },
            nat: 'AU',
          }, {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "Lucas",
              "last": "Santos"
            },
            "location": {
              "street": {
                "number": 742,
                "name": "Rua São José "
              },
              "city": "Campo Grande",
              "state": "Sergipe",
              "country": "Brazil",
              "postcode": 95306,
              "coordinates": {
                "latitude": "33.6142",
                "longitude": "85.7746"
              },
              "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
              }
            },
            "email": "lucas.santos@example.com",
            "login": {
              "uuid": "535752d7-7901-49d1-89a8-2a1720e88805",
              "username": "blackbird951",
              "password": "123456",
              "salt": "x0sfONsc",
              "md5": "d750c1e6b47de6bcbf36b8d5b5cbfe97",
              "sha1": "d8e2127e46b2e111a7f84b87d47d7f22a981f012",
              "sha256": "811de81d8c1e00e044143076d051ce72b1d15f20285bb2bdaa9c9a7992e8d7f9"
            },
            "dob": {
              "date": "1993-12-02T01:35:39.193Z",
              "age": 28
            },
            "registered": {
              "date": "2017-11-28T23:19:50.631Z",
              "age": 4
            },
            "phone": "(09) 8284-0864",
            "cell": "(39) 2747-3162",
            "id": {
              "name": "",
              "value": null
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/56.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
            },
            "nat": "BR"
          }

        ],
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length(2);
      expect(response.body[0]).to.have.property('name', 'female');
      expect(response.body[1]).to.have.property('name', 'male');
      expect(response.body[0]).to.have.property('value', 1);
      expect(response.body[1]).to.have.property('value', 1);
    });
  });

  it('returns the count of users by country', () => {
    cy.request({
      method: 'POST',
      url: 'https://census-toy.nceng.net/prod/toy-census',
      body: {
        actionType: 'CountByCountry',
        users: [
          {
            gender: 'female',
            name: {
              title: 'miss',
              first: 'lorraine',
              last: 'bryant',
            },
            location: {
              street: '4422 harrison ct',
              city: 'gladstone',
              state: 'tasmania',
              postcode: 3294,
            },
            email: 'lorraine.bryant@example.com',
            login: {
              username: 'smallduck444',
              password: 'aaron',
              salt: 'fYBp4g4a',
              md5: '5d0785427febd6d262f00929c10247e7',
              sha1: 'a12a6925740eefebebcbc79add949fa108a78bf0',
              sha256:
                '61a79aebd11cd5910dd9e77dd49b3dd11df2b4b397e328697f33b86e5b082b84',
            },
            dob: '1956-09-17 02:13:36',
            registered: '2009-05-03 14:40:51',
            phone: '00-3540-6154',
            cell: '0498-678-691',
            id: {
              name: 'TFN',
              value: '377488473',
            },
            picture: {
              large: 'https://randomuser.me/api/portraits/women/38.jpg',
              medium: 'https://randomuser.me/api/portraits/med/women/38.jpg',
              thumbnail:
                'https://randomuser.me/api/portraits/thumb/women/38.jpg',
            },
            nat: 'AU',
          }, {
            "gender": "male",
            "name": {
              "title": "Mr",
              "first": "Lucas",
              "last": "Santos"
            },
            "location": {
              "street": {
                "number": 742,
                "name": "Rua São José "
              },
              "city": "Campo Grande",
              "state": "Sergipe",
              "country": "Brazil",
              "postcode": 95306,
              "coordinates": {
                "latitude": "33.6142",
                "longitude": "85.7746"
              },
              "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
              }
            },
            "email": "lucas.santos@example.com",
            "login": {
              "uuid": "535752d7-7901-49d1-89a8-2a1720e88805",
              "username": "blackbird951",
              "password": "123456",
              "salt": "x0sfONsc",
              "md5": "d750c1e6b47de6bcbf36b8d5b5cbfe97",
              "sha1": "d8e2127e46b2e111a7f84b87d47d7f22a981f012",
              "sha256": "811de81d8c1e00e044143076d051ce72b1d15f20285bb2bdaa9c9a7992e8d7f9"
            },
            "dob": {
              "date": "1993-12-02T01:35:39.193Z",
              "age": 28
            },
            "registered": {
              "date": "2017-11-28T23:19:50.631Z",
              "age": 4
            },
            "phone": "(09) 8284-0864",
            "cell": "(39) 2747-3162",
            "id": {
              "name": "",
              "value": null
            },
            "picture": {
              "large": "https://randomuser.me/api/portraits/men/56.jpg",
              "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
              "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
            },
            "nat": "BR"
          }

        ],
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length(2);
      expect(response.body[0]).to.have.property('name', 'AU');
      expect(response.body[1]).to.have.property('name', 'BR');
      expect(response.body[0]).to.have.property('value', 1);
      expect(response.body[1]).to.have.property('value', 1);
    });
  });
});
