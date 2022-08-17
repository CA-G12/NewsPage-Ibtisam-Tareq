const supertest = require('supertest');
const router = require('../src/app');
describe('Testing pages routers and its status codes', () => {
    test('Home Page router returns a status code of 200 and body of index.html', (done) => {
        supertest(router)
            .get('/')
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('404 Page router returns body of 404.html', (done) => {
        supertest(router)
            .get('/data')
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if(err) return done(err);
                done();
            });
    });

    test('500 Internal Server Error Page router returns a body of 500.html', (done) => {
        supertest(router)
            .get('/')
            .expect('Content-Type', /html/)
            .end((err, res) => {
                if(err) return done(err);
                done();
            });
    });

    test('News Page router returns a status code of 200 and body of News', (done) => {
        supertest(router)
            .get("/news")
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if(err)  return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Stylesheet router returns a status code of 200', (done) => {
        supertest(router)
            .get("/CSS/style.css")
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('JS file router returns a status code of 200', (done) => {
        supertest(router)
            .get("/JS/script.js")
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Image router returns a status code of 200 and image type of images.png', (done) => {
        supertest(router)
            .get("/assets/error.png")
            .expect(200)
            .expect('Content-Type', 'image/png')
            .end((err, res) => {
                if(err) return done(err);
                done();
            });
    });

    test('Image router returns a status code of 200 and image type of news-icon.png', (done) => {
        supertest(router)
            .get("/assets/news-icon.png").expect(200).expect('Content-Type', 'image/png')
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });

    test('Image router returns a status code of 200 and body of tab-icon.png', (done) => {
        supertest(router)
            .get("/search:news")
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                expect(res.statusCode).toBe(200); 
                done();
            });
    });
});