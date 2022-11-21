///<reference types="cypress"/>

describe('sssss', () => {
  it('aaaaa', () => {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      name: 'Leadfgsgfsdfrn nesto Appium Automation with Javaas',
      isbn: 'bc44dsfgsd3424gsfsgfsgdd2',
      aisle: '22asgsdf34344hsdfhbasgasgasdg547823',
      author: 'Johgsgfgfn foeticar',
    }).then(function (response) {
      expect(response.body).to.have.property('Msg', 'successfully added');
      expect(response.status).to.equal(200);
    });
  });
});
