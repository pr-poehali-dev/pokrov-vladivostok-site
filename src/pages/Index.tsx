import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import MobileMenu from "@/components/MobileMenu";

export default function Index() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const services = [
    {
      title: "Жилищное строительство",
      description: "Современные жилые комплексы с использованием качественных материалов",
      icon: "Home"
    },
    {
      title: "Коммерческое строительство",
      description: "Офисные здания и торговые центры европейского уровня",
      icon: "Building"
    },
    {
      title: "Промышленное строительство",
      description: "Производственные комплексы с соблюдением всех стандартов",
      icon: "Factory"
    },
    {
      title: "Реконструкция",
      description: "Модернизация существующих объектов с сохранением архитектуры",
      icon: "Wrench"
    }
  ];

  const projects = [
    {
      title: "ЖК 'Владивосток Сити'",
      description: "Современный жилой комплекс в центре города",
      image: "/img/915864a7-2e21-4aee-bd5b-36c79a674379.jpg",
      year: "2024"
    },
    {
      title: "Бизнес-центр 'Тихоокеанский'",
      description: "Офисное здание класса А с современными технологиями",
      image: "/img/de24e61d-0009-4b18-863b-9e2c64a2e383.jpg",
      year: "2023"
    }
  ];

  const materials = [
    {
      name: "Высокопрочный бетон",
      description: "Марка М400-М500 с морозостойкостью F300"
    },
    {
      name: "Армирующая сталь",
      description: "Класс А500С с антикоррозийным покрытием"
    },
    {
      name: "Теплоизоляция",
      description: "Минеральная вата плотностью 150 кг/м³"
    },
    {
      name: "Кровельные материалы",
      description: "Мембранная кровля с гарантией 25 лет"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Building2" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold font-roboto text-foreground">Покров</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#materials" className="text-muted-foreground hover:text-primary transition-colors">Материалы</a>
            <a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Открыть меню"
            >
              <Icon name="Menu" size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl font-bold font-roboto text-foreground mb-6">
              Строительство с гарантией <span className="text-primary">качества</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Компания «Покров» — ваш надежный партнер в строительстве во Владивостоке. 
              Мы используем только проверенные материалы и современные технологии.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-scale-in">
                <Icon name="Building2" size={20} className="mr-2" />
                Наши проекты
              </Button>
              <Button variant="outline" size="lg" className="animate-scale-in">
                <Icon name="FileText" size={20} className="mr-2" />
                Получить консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-3xl font-bold font-roboto text-foreground mb-4">О компании</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Более 15 лет мы создаем качественные объекты недвижимости во Владивостоке. 
              Наша команда профессионалов гарантирует соблюдение всех строительных норм 
              и использование только сертифицированных материалов.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Award" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-roboto">15+ лет опыта</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Успешно завершенных проектов различной сложности</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-roboto">50+ специалистов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Квалифицированных инженеров и строителей</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shield" size={48} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-roboto">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">5 лет гарантии на все виды работ</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold font-roboto text-foreground mb-4">Наши услуги</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр строительных услуг от проектирования до сдачи объекта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <Icon name={service.icon as any} size={40} className="mx-auto text-primary mb-4" />
                  <CardTitle className="font-roboto text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold font-roboto text-foreground mb-4">Наши проекты</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры успешно реализованных объектов во Владивостоке
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-roboto">{project.title}</CardTitle>
                    <span className="text-sm text-primary font-medium">{project.year}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-roboto text-foreground mb-6">
                Качественные материалы
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Мы работаем только с проверенными поставщиками и используем материалы, 
                соответствующие российским и международным стандартам качества.
              </p>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-foreground">{material.name}</h4>
                      <p className="text-sm text-muted-foreground">{material.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/9b65f6f1-8789-48b4-b35f-fd0240c977d4.jpg" 
                alt="Строительные материалы"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold font-roboto text-foreground mb-4">Контакты</h3>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами для обсуждения вашего проекта
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="MapPin" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-roboto">Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Владивосток<br />ул. Светланская, 123</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Phone" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-roboto">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (423) 123-45-67<br />+7 (423) 987-65-43</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Mail" size={32} className="mx-auto text-primary mb-4" />
                <CardTitle className="font-roboto">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@pokrov-vl.ru<br />projects@pokrov-vl.ru</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="animate-scale-in">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Building2" size={24} className="text-primary" />
                <span className="text-xl font-bold font-roboto">Покров</span>
              </div>
              <p className="text-slate-300">
                Строительная компания полного цикла во Владивостоке
              </p>
            </div>
            <div>
              <h4 className="font-roboto font-medium mb-4">Услуги</h4>
              <ul className="space-y-2 text-slate-300">
                <li>Жилищное строительство</li>
                <li>Коммерческие объекты</li>
                <li>Промышленное строительство</li>
                <li>Реконструкция</li>
              </ul>
            </div>
            <div>
              <h4 className="font-roboto font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-slate-300">
                <li>О компании</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
                <li>Новости</li>
              </ul>
            </div>
            <div>
              <h4 className="font-roboto font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-slate-300">
                <p>г. Владивосток</p>
                <p>+7 (423) 123-45-67</p>
                <p>info@pokrov-vl.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300">
            <p>&copy; 2024 Строительная компания «Покров». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}