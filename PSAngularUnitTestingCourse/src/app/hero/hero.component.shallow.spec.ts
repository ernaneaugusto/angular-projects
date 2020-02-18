import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('HeroComponent (shallow test)', () => {
    let fixture: ComponentFixture<HeroComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeroComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);
    });

    it('should have the correct hero', () => {
        fixture.componentInstance.hero = { id: 10, name: 'Iron Man', strength: 100 };
        expect(fixture.componentInstance.hero.name).toEqual('Iron Man');
    })
    
    it('should render hero name in tag <a>', () => {
        fixture.componentInstance.hero = { id: 10, name: 'Iron Man', strength: 100 };
        fixture.detectChanges();
        
        expect(fixture.nativeElement.querySelector('a').textContent).toContain('Iron Man');
        expect(fixture.nativeElement.querySelector('span').textContent).toContain(10);
        // mesma selecao acima feita com debugElement
        // expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent).toContain('Iron Man');
    })
})