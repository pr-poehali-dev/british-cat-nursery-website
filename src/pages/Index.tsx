import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">БриМурр</h1>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors"
              >
                О питомнике
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl font-bold text-primary mb-6">
                Питомник британских кошек в Москве
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Добро пожаловать в мир элегантности и благородства. БриМурр — это профессиональный питомник британских короткошёрстных кошек с многолетним опытом разведения.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Связаться с нами
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/4e224241-3b71-4651-8c6f-8c8c2034fedd/files/9b90b5d1-ef2e-4f94-b286-2008590ee627.jpg"
                alt="Британский кот"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">О питомнике БриМурр</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Профессионализм</h3>
                <p className="text-muted-foreground">
                  Многолетний опыт разведения британских кошек с соблюдением всех стандартов породы
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Забота</h3>
                <p className="text-muted-foreground">
                  Каждый котёнок получает максимум внимания, заботы и ветеринарного контроля
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Home" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Домашняя атмосфера</h3>
                <p className="text-muted-foreground">
                  Котята растут в семейной обстановке, окружённые любовью и вниманием
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">Наши питомцы</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/4e224241-3b71-4651-8c6f-8c8c2034fedd/files/9b90b5d1-ef2e-4f94-b286-2008590ee627.jpg"
                alt="Британская кошка"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Благородство</h3>
                  <p className="text-white/90">Британская короткошёрстная</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/4e224241-3b71-4651-8c6f-8c8c2034fedd/files/1f5d5a8f-c4da-4711-83c9-f82b6f535fd2.jpg"
                alt="Британский котёнок"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Очарование</h3>
                  <p className="text-white/90">Котёнок 3 месяца</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src="https://cdn.poehali.dev/projects/4e224241-3b71-4651-8c6f-8c8c2034fedd/files/c31e0fa1-657c-4492-88b1-dc335b555103.jpg"
                alt="Британская кошка"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-semibold">Элегантность</h3>
                  <p className="text-white/90">Британская короткошёрстная</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl p-12">
            <h3 className="text-3xl font-semibold text-center mb-8">Видео о питомнике</h3>
            <div className="aspect-video bg-card rounded-xl flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <Icon name="Play" size={64} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Видео скоро появится</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">Свяжитесь с нами</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">Москва</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-accent mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@brimurr.ru</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email"
                      placeholder="Email" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Телефон" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      className="w-full min-h-32"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">БриМурр</h3>
          <p className="text-primary-foreground/80 mb-6">
            Питомник британских кошек в Москве
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-primary-foreground/60 mt-8 text-sm">
            © 2024 БриМурр. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
