import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let heroes;
    let mockHeroService;

    beforeEach(() => {
        heroes = [
            { id: 1, name: 'Iron Man', strength: 99 },
            { id: 3, name: 'Homem Aranha', strength: 60 },
            { id: 2, name: 'Capitão América', strength: 80 }
        ];

        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

        component = new HeroesComponent(mockHeroService);
    });

    it('should onInit', () => {
        expect(component.ngOnInit).toBeTruthy();
    });

    describe('HeroesComponent delete', () => {
        it('should remove the indicated herofrom the list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = heroes;

            component.delete(heroes[2]);

            expect(component.heroes.length).toBe(2);
            expect(component.heroes[0]).toBeTruthy();
            expect(component.heroes[1]).toBeTruthy();
            expect(component.heroes[2]).toBeUndefined();
        });

        it('should add the indicated hero from the list', () => {
            component.heroes = [];
            mockHeroService.addHero.and.returnValue(of(true));

            component.add('Dr Estranho');

            expect(component.heroes.length).toBe(1);
        });

        it('should getHeroes', () => {
            component.heroes = [];
            mockHeroService.getHeroes.and.returnValue(of(heroes));

            component.getHeroes();

            expect(typeof component.heroes).toBe(typeof {});
            expect(component.heroes.length).toBe(3);
            expect(component.heroes[0].hasOwnProperty('id')).toBe(true);
            expect(component.heroes[0].hasOwnProperty('name')).toBe(true);
            expect(component.heroes[0].hasOwnProperty('strength')).toBe(true);
        });
        
        it('should getHeroes', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = heroes;

            component.delete(heroes[2]);
            expect(mockHeroService.deleteHero).toHaveBeenCalledWith(heroes[2]);
        });
    })
})