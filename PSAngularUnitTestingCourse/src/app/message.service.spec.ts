import { MessageService } from "./message.service";

describe('MessageService', () => {
    let service: MessageService;

    it('should have no messages to start', () => {
        service = new MessageService();
        expect(service.messages.length).toBe(0);
    });

    it('should have one messages to call service.add()', () => {
        const mensagem = 'Exemplo mensagem';
        service = new MessageService();
        service.add(mensagem);
        
        expect(service.messages.length).toBe(1);
        expect(service.messages[0]).toBe(mensagem);
    });
    
    it('should have no messages to call service.clear() function', () => {
        const mensagem = 'Mensagem teste';
        service = new MessageService();
        service.add(mensagem);

        service.clear();
        expect(service.messages.length).toBe(0);
    });

})