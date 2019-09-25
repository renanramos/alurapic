import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  photos = [
    {
      url: "https://media.gettyimages.com/photos/beautiful-lion-caesar-in-the-golden-grass-of-masai-mara-picture-id486237421?b=1&k=6&m=486237421&s=612x612&w=0&h=kRiXKtIWtFyun-EIRbbq6Zmh88ImH6lHyrs2lTqB8Xo=",
      description: 'Leão'
    },
    {
      url: "https://media.gettyimages.com/photos/male-african-lion-is-cuddled-by-his-cub-during-an-affectionate-moment-picture-id933863084?b=1&k=6&m=933863084&s=612x612&w=0&h=GUBZ72vCEVqQcr15sf3xTDeDTCF-9ovw0rEBZ-KTLo4=",
      description: 'Leoa'
    },
    {
      url: "https://media.gettyimages.com/photos/male-african-lion-is-cuddled-by-his-cub-during-an-affectionate-moment-picture-id933863084?b=1&k=6&m=933863084&s=612x612&w=0&h=GUBZ72vCEVqQcr15sf3xTDeDTCF-9ovw0rEBZ-KTLo4=",
      description: 'Leoa'
    },
    {
      url: "https://media.gettyimages.com/photos/male-african-lion-is-cuddled-by-his-cub-during-an-affectionate-moment-picture-id933863084?b=1&k=6&m=933863084&s=612x612&w=0&h=GUBZ72vCEVqQcr15sf3xTDeDTCF-9ovw0rEBZ-KTLo4=",
      description: 'Leoa'
    }
  ]

}
