import { ComponentFixture, TestBed } from "@angular/core/testing"
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HeroesComponent } from "./heroes.component";
import { HeroComponent } from "../hero/hero.component"
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

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
            declarations: [HeroesComponent],
            providers: [
                { provide: HeroService, useValue: heroServiceMock }
            ],
            schemas: [NO_ERRORS_SCHEMA]
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