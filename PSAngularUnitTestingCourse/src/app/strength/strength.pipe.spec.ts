import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
    let pipe: StrengthPipe;

    beforeEach(() => {
        pipe = new StrengthPipe();
    });

    it('should display weak if strength = 5', () => {
        const strength = 5;
        expect(pipe.transform(strength)).toEqual(`${strength} (weak)`);
    })

    it('should display weak if strength > 10 && strength < 20', () => {
        const strength = 15;
        expect(pipe.transform(strength)).toEqual(`${strength} (strong)`);
    })

    it('should display weak if strength == 20', () => {
        const strength = 20;
        expect(pipe.transform(strength)).toEqual(`${strength} (unbelievable)`);
    })

    it('should display weak if strength > 20', () => {
        const strength = 22;
        expect(pipe.transform(strength)).toEqual(`${strength} (unbelievable)`);
    })
});