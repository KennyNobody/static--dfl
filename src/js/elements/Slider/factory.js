import analytics from "./configs/analytics";
import contentGallery from "./configs/contentGallery";
import gallery from "./configs/gallery";
import handbook from "./configs/handbook";
import news from "./configs/news";
import ourOffice from "./configs/ourOffice";
import partners from "./configs/partners";
import project from "./configs/project"; //
import projectsAnother from "./configs/projectsAnother"; //
import projectsGallery from "./configs/projectsGallery"; //
import reviews from "./configs/reviews";
import services from "./configs/services";
import workers from "./configs/workers";
import workersReviews from "./configs/workersReviews";

export default function(el) {
    const name = el.getAttribute('data-slider');

    if (name === 'analytics') return analytics(el);
    if (name === 'contentGallery') return contentGallery(el);
    if (name === 'gallery') return gallery(el);
    if (name === 'handbook') return handbook(el);
    if (name === 'news') return news(el);
    if (name === 'ourOffice') return ourOffice(el);
    if (name === 'partners') return partners(el);
    if (name === 'project') return project(el);
    if (name === 'projectsAnother') return projectsAnother(el);
    if (name === 'projectsGallery') return projectsGallery(el);
    if (name === 'reviews') return reviews(el);
    if (name === 'services') return services(el);
    if (name === 'workers') return workers(el);
    if (name === 'workersReviews') return workersReviews(el);

    console.error('Конфигурационный файл для слайдера не найден');
}
