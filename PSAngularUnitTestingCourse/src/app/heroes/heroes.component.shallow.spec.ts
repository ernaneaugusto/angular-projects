import { ComponentFixture, TestBed } from "@angular/core/testing"
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { Input, Component } from "@angular/core";
import { Hero } from "../hero";

// 
@Component({
    selector: 'app-hero',
    template: '<div></div>'
})

class HeroComponentFake {
    @Input() hero: Hero;
}

// Test
describe('HeroesComponent (shallow test)', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;
    let heroServiceMock;
    let heroes;

    beforeEach(() => {
        heroes = [
            { id: 1, name: 'Iron Man', strength: 99 },
            { id: 3, name: 'Homem Aranha', strength: 60 },
            { id: 2, name: 'Capitão América', strength: 80 }
        ];
        heroServiceMock = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent,
                HeroComponentFake
            ],
            providers: [
                { provide: HeroService, useValue: heroServiceMock }
            ]
        })

        fixture = TestBed.createComponent(HeroesComponent);
    });

    it('should set heroes correctly from the service', () => {
        heroServiceMock.getHeroes.and.returnValue(of(heroes));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    })

    it('should createone li for each hero', () => {
        heroServiceMock.getHeroes.and.returnValue(of(heroes));
        fixture.detectChanges();
        // mesmo teste acima contando a partir de tags HTML
        expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3)
    })
})