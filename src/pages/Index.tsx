import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">БриМурр</h1>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={28} />
            </button>
            
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
                onClick={() => scrollToSection('kittens')}
                className="text-foreground hover:text-primary transition-colors"
              >
                Свободные котята
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
          
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Главная
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  О нас
                </button>
                <button 
                  onClick={() => scrollToSection('kittens')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Свободные котята
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Галерея
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border"
                >
                  Контакты
                </button>
                <a 
                  href="https://t.me/brimurr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-left text-foreground hover:text-primary transition-colors py-3 bg-accent/10 px-4 rounded-lg"
                >
                  <Icon name="Send" size={20} className="text-accent" />
                  <span className="font-semibold">Написать в Telegram</span>
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-6xl font-bold text-primary mb-6">Домашний питомник британских кошек в Москве</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">Вы явно заглянули сюда в поисках нового друга! Мы на 99% уверены, что Ваше сердце будет украдено именно нашим котёнком. Знакомьтесь с нами на сайте и в Telegram, влюбляйтесь и приходите забирать счастье в свой дом!</p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
              >
                Связаться с нами
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/8dfc97b0-6eb6-4019-b6fc-90aba262b716.jpg"
                alt="Британский кот"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">О нас</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="grid grid-cols-3 gap-2 p-4">
                <img 
                  src="https://cdn.poehali.dev/files/f79a51c0-e5ac-4a57-91f6-9956c8d65713.jpg"
                  alt="Забота о котятах 1"
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/f79a51c0-e5ac-4a57-91f6-9956c8d65713.jpg')}
                />
                <img 
                  src="https://cdn.poehali.dev/files/2878a398-cfd7-4349-9218-6888cde0bc6e.jpg"
                  alt="Забота о котятах 2"
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/2878a398-cfd7-4349-9218-6888cde0bc6e.jpg')}
                />
                <img 
                  src="https://cdn.poehali.dev/files/7744596d-6474-4093-a4f0-d77ce00f2a1a.jpg"
                  alt="Забота о котятах 3"
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity rounded"
                  onClick={() => setSelectedImage('https://cdn.poehali.dev/files/7744596d-6474-4093-a4f0-d77ce00f2a1a.jpg')}
                />
              </div>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Забота</h3>
                <div className="text-muted-foreground text-left space-y-4">
                  <p>Мы заботимся о своих питомцах, поэтому в квартире создано всё для их комфортного и безопасного проживания.</p>
                  
                  <p>Для кошек обустроена отдельная комната. В комнате установлены:</p>
                  
                  <p>— автоматические лотки Реtkit Рurаmах2 (два в их комнате, а всего квартире три), что даёт возможность кошкам воспользоваться чистым лотком в любое время суток;</p>
                  
                  <p>— рекуператоры Fuji Funаi 150 (один в их комнате, всего в квартире два), которые подают в комнату свежий фильтрованный воздух без сквозняков, что особенно важно зимой;</p>
                  
                  <p>— на всех 4х окнах в квартире установлены сетки-антикошки;</p>
                  
                  <p>— установлена камера видеонаблюдения, которая позволяет наблюдать за животными даже вне дома;</p>
                  
                  <p>— для физической активности установлен комплекс с когтеточками и настенным столбиком;</p>
                  
                  <p>— стены в комнате обшиты гипсовым кирпичом, так как котята, как и маленькие дети, тянут всё в рот, включая обои.</p>
                  
                  <p>— ну и немного милоты: картины с изображением британских котиков нам написала художник из Санкт-Петербурга. Её <a href="https://www.avito.ru/brands/33b5060dfb8ca8d74e439fe600057b91/items/all?sellerId=62ee7bebe98369737342681e5f145a3d&s=search_page_share" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">профиль на Авито</a>.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="FileText" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center">Правила посещения</h3>
                <div className="text-muted-foreground text-left space-y-4">
                  <p className="font-semibold">Уважаемый покупатель!</p>
                  
                  <p>Мы дорожим здоровьем наших питомцев, поэтому просим Вас перед посещением нашего дома ознакомиться со следующей информацией:</p>
                  
                  <p>— Перед входом в квартиру наденьте, пожалуйста, бахилы и обработайте руки спиртовыми салфетками (эти расходники мы Вам предоставим). Данная мера необходима, так как в нашем доме почти всегда есть маленькие котята и/или беременные кошки, а вирусы можно принести на обуви или на руках;</p>
                  
                  <p>— Мы очень просим не гладить наших животных. Так как Вы находитесь в поиске нового питомца, мы не можем быть уверены, что Вы не посещали до нас другие питомники, откуда можно принести различные вирусные/инфекционные заболевания;</p>
                  
                  <p>— Не берите котят на руки. Они Вас не знают, и это может их напугать. Мы уже столкнулись однажды с ситуацией, когда мужчина, подняв котёнка на руки, уронил его с высоты своего роста об ламинат. Стресс и у нас, и у котёнка. Если Вы хотите рассмотреть понравившегося малыша, мы сами поднимем его и покажем поближе;</p>
                  
                  <p>— Внимательно смотрите под ноги, наши кошки любопытные и будут крутиться вокруг Вас, поэтому есть риск на них наступить;</p>
                  
                  <p>— Вас будут встречать только те кошки, которые сами захотели выйти. В нашем доме в общей сложности проживает 9 взрослых животных. У каждого свои привычки и свой ритм жизни. Частые приходы людей могут нарушать их покой. Мы не хотим заставлять их жить по принципу контактного зоопарка.</p>
                  
                  <p>Просим с пониманием отнестись к данным требованиям. Ведь это и Ваша уверенность в том, что Вы приобрели здорового котёнка.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="kittens" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-8">Свободные котята</h2>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-muted-foreground mb-4">
              Фотографии котят могли уже устареть. За дополнительными фото и видео обращайтесь в наш Telegram
            </p>
            <a 
              href="https://t.me/brimur" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-lg font-semibold"
            >
              <Icon name="Send" size={24} />
              Написать в Telegram
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/95e0efc7-d4f2-41e1-ad6d-558c38bbbcde.jpg"
                alt="Лиловый котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: лиловый</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстный</span>
                  </div>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold text-accent">60 000 ₽</p>
                </div>
                <a
                  href="https://t.me/brimur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <Icon name="Send" size={18} />
                  Забронировать
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/8570490e-71d6-4758-9ae4-631f0871395c.jpg"
                alt="Лиловый котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: лиловый</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Длинношёрстный</span>
                  </div>
                </div>
                <a
                  href="https://t.me/brimur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <Icon name="Send" size={18} />
                  Забронировать
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/df37de75-4067-4d06-9c7e-d25d3a0fe084.jpg"
                alt="Лиловая кошечка"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: лиловый</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: кошечка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстная</span>
                  </div>
                </div>
                <a
                  href="https://t.me/brimur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <Icon name="Send" size={18} />
                  Забронировать
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/0e54ae8c-5f94-4c0e-8f4c-00b0b512a8fb.jpg"
                alt="Голубая кошечка"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 24 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />
                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: кошечка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Длинношёрстная</span>
                  </div>
                </div>
                <a
                  href="https://t.me/brimur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <Icon name="Send" size={18} />
                  Забронировать
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://cdn.poehali.dev/files/eb17dff2-ae47-42b2-8136-7da5c07e7867.jpg"
                alt="Голубой котик"
                className="w-full h-auto object-contain"
              />
              <CardContent className="p-6">
                <div className="space-y-2 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={18} className="text-accent" />
                    <span>Дата рождения: 15 сентября 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-accent" />                    <span>Окрас: голубой</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={18} className="text-accent" />
                    <span>Пол: котик</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Scissors" size={18} className="text-accent" />
                    <span>Короткошёрстный</span>
                  </div>
                </div>
                <a
                  href="https://t.me/brimur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md transition-colors font-medium"
                >
                  <Icon name="Send" size={18} />
                  Забронировать
                </a>
              </CardContent>
            </Card>


          </div>
          
          <div className="mt-12 text-center bg-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">Условия приобретения</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <Icon name="FileCheck" size={24} className="text-accent mb-3" />
                <h4 className="font-semibold mb-2">Документы</h4>
                <p className="text-sm text-muted-foreground">Метрика, ветпаспорт, договор купли-продажи</p>
              </div>
              <div>
                <Icon name="Shield" size={24} className="text-accent mb-3" />
                <h4 className="font-semibold mb-2">Здоровье</h4>
                <p className="text-sm text-muted-foreground">Все прививки по возрасту, обработка от паразитов</p>
              </div>
              <div>
                <Icon name="Heart" size={24} className="text-accent mb-3" />
                <h4 className="font-semibold mb-2">Поддержка</h4>
                <p className="text-sm text-muted-foreground">Консультации и помощь после приобретения</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center text-primary mb-16">Галерея</h2>
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

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Увеличенное фото"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Index;