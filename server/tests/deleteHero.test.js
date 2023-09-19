const { expect } = require('chai');
const sinon = require('sinon');
const Superheroes = require('../models/models');

describe('dellHero function', () => {
  it('should delete a hero and associated images', async () => {
    const superhero = {
      id: 100,
      SuperheroImages: [
        { image: 'image1.jpg' },
        { image: 'image2.jpg' },
      ],
      destroy: sinon.stub().resolves(true),
    };

    sinon.stub(Superheroes, 'findOne').resolves(superhero);
    sinon.stub(global, 'deleteImage').resolves();

    const req = { params: { id: 100 } };
    const res = { status: sinon.stub(), json: sinon.stub() };

    await dellHero(req, res);

    expect(Superheroes.findOne.calledOnce).to.be.true;
    expect(global.deleteImage.calledTwice).to.be.true;
    expect(superhero.destroy.calledOnce).to.be.true;

    // Перевірка статусу та відповіді
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith({ message: 'Hero and associated images deleted' })).to.be.true;
  });

  it('should return a 404 status if hero not found', async () => {
    sinon.stub(Superheroes, 'findOne').resolves(null);

    const req = { params: { id: 100 } };
    const res = { status: sinon.stub(), json: sinon.stub() };

    await dellHero(req, res);

    expect(Superheroes.findOne.calledOnce).to.be.true;
    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: 'Hero not found' })).to.be.true;
  });
});
