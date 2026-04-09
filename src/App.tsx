import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Instagram, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  Clock,
  User,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'O Método', href: '#metodo' },
    { name: 'Janaina', href: '#sobre' },
    { name: 'Agendamento', href: '#agendamento' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-semibold tracking-tight text-primary">
              Janaina Camargo
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="rounded-full px-6" asChild>
              <a href="#agendamento">Agendar Aula</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-foreground/70 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full rounded-full" asChild>
                  <a href="#agendamento" onClick={() => setIsOpen(false)}>Agendar Aula</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518611012118-2969c63700b7?auto=format&fit=crop&q=80&w=2000"
          alt="Pilates Studio"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Pilates Tradicional & Autêntico
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
            A arte do movimento <br />
            <span className="italic text-primary">em sua forma pura.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Descubra o método original de Joseph Pilates com Janaina Camargo. 
            Foco em controle, precisão e bem-estar integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full px-8 text-lg" asChild>
              <a href="#agendamento">Começar Agora</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg" asChild>
              <a href="#metodo">Conhecer o Método</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

const MethodSection = () => {
  const features = [
    {
      title: 'Controle & Precisão',
      description: 'Cada movimento é executado com consciência total, integrando corpo e mente.',
      icon: <CheckCircle2 className="text-primary" size={32} />
    },
    {
      title: 'Powerhouse',
      description: 'O fortalecimento do centro do corpo como base para toda a estabilidade física.',
      icon: <CheckCircle2 className="text-primary" size={32} />
    },
    {
      title: 'Fluidez',
      description: 'Movimentos que se conectam harmoniosamente, criando uma dança de força.',
      icon: <CheckCircle2 className="text-primary" size={32} />
    }
  ];

  return (
    <section id="metodo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-rows-2 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8">O Pilates Tradicional</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              O Pilates Tradicional, ou Autêntico, segue rigorosamente os ensinamentos deixados por Joseph Pilates. 
              Não se trata apenas de exercícios, mas de um sistema completo de condicionamento físico e mental.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Diferente das abordagens modernas, o método clássico utiliza aparelhos específicos e uma sequência 
              lógica que desafia o corpo de forma progressiva e segura.
            </p>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-1">{f.title}</h4>
                    <p className="text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=1000"
                alt="Pilates Practice"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl hidden lg:block max-w-xs shadow-xl">
              <p className="font-serif text-2xl italic mb-2">"A saúde é o primeiro dever da vida."</p>
              <p className="text-sm opacity-80">— Joseph Pilates</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                  alt="Janaina Camargo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-0 right-0 bg-secondary text-white p-4 rounded-full shadow-lg">
                <Instagram size={24} />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Instrutora Certificada</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Janaina Camargo</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Com anos de dedicação ao movimento consciente, Janaina Camargo especializou-se no Pilates Tradicional 
              para oferecer uma experiência transformadora aos seus alunos.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Sua abordagem combina o rigor técnico do método clássico com uma sensibilidade única para as 
              necessidades individuais, promovendo não apenas força, mas uma nova forma de habitar o próprio corpo.
            </p>
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-3xl font-serif text-primary">10+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Anos de Exp.</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <p className="text-3xl font-serif text-primary">500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Alunos</p>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <p className="text-3xl font-serif text-primary">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Dedicada</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SchedulingSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="agendamento" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Agende sua Aula</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Escolha o melhor horário para iniciar sua jornada no Pilates Tradicional. 
            Nossas aulas são personalizadas para o seu nível.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1 border-none shadow-lg bg-background">
            <CardHeader>
              <CardTitle className="font-serif">Selecione o Dia</CardTitle>
              <CardDescription>Aulas disponíveis de segunda a sexta.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                locale={ptBR}
              />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif">Detalhes do Agendamento</CardTitle>
              <CardDescription>Preencha seus dados para confirmar a pré-reserva.</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-serif mb-2">Solicitação Enviada!</h3>
                  <p className="text-muted-foreground">
                    Entraremos em contato em breve para confirmar seu horário no dia {date ? format(date, "dd 'de' MMMM", { locale: ptBR }) : ''}.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Horário Preferencial</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione um horário" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="08:00">08:00</SelectItem>
                          <SelectItem value="09:00">09:00</SelectItem>
                          <SelectItem value="10:00">10:00</SelectItem>
                          <SelectItem value="14:00">14:00</SelectItem>
                          <SelectItem value="15:00">15:00</SelectItem>
                          <SelectItem value="16:00">16:00</SelectItem>
                          <SelectItem value="17:00">17:00</SelectItem>
                          <SelectItem value="18:00">18:00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Observações (Opcional)</Label>
                    <Input id="notes" placeholder="Alguma condição física ou objetivo específico?" />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" className="w-full md:w-auto px-12 rounded-full h-12 text-lg">
                      Solicitar Agendamento
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif mb-8">Onde Estamos</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-muted-foreground">Rua do Bem Estar, 123 - Centro<br />São Paulo, SP</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone / WhatsApp</h4>
                  <p className="text-muted-foreground">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@janainapilates.com.br</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-muted flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin size={48} className="mx-auto mb-4 text-primary opacity-20" />
              <p className="text-muted-foreground italic">Mapa do estúdio será carregado aqui.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="font-serif text-3xl font-semibold tracking-tight mb-6 block">
              Janaina Camargo
            </span>
            <p className="text-primary-foreground/70 max-w-sm leading-relaxed">
              Dedicada a preservar a pureza do método Pilates Tradicional, 
              ajudando você a alcançar o equilíbrio perfeito entre corpo e mente.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#metodo" className="hover:text-white transition-colors">O Método</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Janaina</a></li>
              <li><a href="#agendamento" className="hover:text-white transition-colors">Agendamento</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6">Horários</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>Seg - Sex: 07:00 - 20:00</li>
              <li>Sáb: 08:00 - 12:00</li>
              <li>Dom: Fechado</li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-white/10 mb-8" />
        
        <div className="flex flex-col md:row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2026 Janaina Camargo Pilates Tradicional. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ProgramsSection = () => {
  const programs = [
    {
      title: 'Mat Pilates (Solo)',
      description: 'A base do método. Exercícios realizados no solo que desafiam a gravidade e o próprio corpo.',
      image: 'https://images.unsplash.com/photo-1518611012118-2969c63700b7?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Aparelhos Originais',
      description: 'Trabalho no Reformer, Cadillac, Wunda Chair e outros aparelhos desenhados por Joseph Pilates.',
      image: 'https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Pilates para Atletas',
      description: 'Programas específicos para melhorar a performance e prevenir lesões em diversas modalidades.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Nossos Programas</h2>
          <p className="text-muted-foreground">Inspirados na excelência do Pilates Tradicional e metodologias internacionais.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <MethodSection />
        <ProgramsSection />
        <AboutSection />
        <SchedulingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
