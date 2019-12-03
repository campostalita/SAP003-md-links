const mdLinks = require('../index.js');

describe("mdLinks", () => {
    test("should a function", (done) => {
      expect(typeof mdLinks).toBe("function");
      done();
    })

    test("ver se o retorno esta certo", (done) => {
        mdLinks('./lib/__tests__/text.md')
            .then(result => {
                expect(result).toEqual([
                    {href:"https://nodejs.org/pt-br/" , text: "Node.js"}, 
                    {href:"https://developers.google.com/v8/" , text: "Chrome"}
                ]);
                done();
            })
    }) 

    test("erro", (done) => {
        mdLinks('./lib/__tests__/text.m')
            .catch(error => {
                expect(error).toEqual("Could not open file: Error: ENOENT: no such file or directory, open './lib/__tests__/text.m'");
                done();
            })
    })
});

