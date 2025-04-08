import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';

@Component({
  selector: 'app-welcome-view',
  imports: [CommonModule],
  templateUrl: './welcome-view.component.html',
  styleUrl: './welcome-view.component.css'
})
export class WelcomeViewComponent {

  recommendedForYou = [
    { image: 'https://imgs.search.brave.com/jOTAXkwS_mCQ86xTvSjwgVUk8xhQXBxHfcoHKyfj-nw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2tpbmNhbmNlci5v/cmcvd3AtY29udGVu/dC91cGxvYWRzL2Jv/Yk1hcmxleVNpbmdp/bmdHZXR0eUltYWdl/cy0xMDI0eDY5Mi5q/cGc', name: 'Bob Marley' },
    { image: 'https://imgs.search.brave.com/VwIhjJyHesph-KKWKM70yOWzKmqCcZqQ1yUyEsYqFV0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzQxL1dp/c2luX3lfWWFuZGVs/X2VuX0FjY2Vzb19U/b3RhbF8lMjg1MzQ5/OTg0NTgxJTI5XyUy/OGNyb3BwZWQlMjku/anBnLzUxMnB4LVdp/c2luX3lfWWFuZGVs/X2VuX0FjY2Vzb19U/b3RhbF8lMjg1MzQ5/OTg0NTgxJTI5XyUy/OGNyb3BwZWQlMjku/anBn', name: 'Wisin Y Yandel' },
    { image: 'https://imgs.search.brave.com/ZsZdAdP9-isItImrRdGe23bY7V7XE-JODMS_I-qIJ0g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kM3Zo/YzUzY2w4ZThrbS5j/bG91ZGZyb250Lm5l/dC9oZWxsby1zdGFn/aW5nL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzAzLzA3MDAz/ODE1L1ZmY0JJUm9Y/ZlQ5R3NqMlU0WDVK/Q1ZFMlk4dnE2NUpQ/YnFDdUl5aGctNDIw/eDQyMC5qcGc', name: 'David Guetta' },
    { image: 'https://imgs.search.brave.com/jqNzve6C-iaiJ7RMeG8stfHrwdAdnAkSnU7K1u1SYhg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mYXN0/bHktczMuYWxsbXVz/aWMuY29tL2FydGlz/dC9tbjAwMDI0MTA1/NDYvNDAwL3JvWTU5/aW01ZVo2UG5RR1Ry/T3VpNmxXbmJFTjVm/Q2ppZnJvNnhoSUJ1/QjQ9LmpwZw', name: 'Stromae' },
  ];

  suggestedArtists = [
    { image: 'https://imgs.search.brave.com/fNe5pMLc6JmhRz_eC3pHMwb-klrfddK_TBHDsNg7EwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFYdTBPN0k3dkwu/anBn', name: 'Ani Kamoze' },
    { image: 'https://imgs.search.brave.com/r8kipCY5iLh1hOBroKhZCEcfRQqXGjEszoYaFstXVSI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRp/c2NvZ3MuY29tL3pE/NUZxSGw4WVk0N2lN/d2dBQnZDWGJvbC13/WDVxTlRiNHA0THQ0/Zmx0ZmcvcnM6Zml0/L2c6c20vcTo0MC9o/OjMwMC93OjMwMC9j/ek02THk5a2FYTmpi/MmR6L0xXUmhkR0Zp/WVhObExXbHQvWVdk/bGN5OVNMVEUwTlRn/ei9PREF3TFRFMk56/YzJPVEE0L09UWXRO/VE0yTmk1cWNHVm4u/anBlZw', name: 'Trans - X' },
    { image: 'https://imgs.search.brave.com/R4ZAUtvaZkK-95NGpN5T8drzJz8sXFSODoaheLKbD1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvd2l6/LWtoYWxpZmEtZnVu/bnktZmFjZS1ncjNu/bGptdmZiNHl5enUy/LmpwZw', name: 'Wiz Kalifa' },
    { image: 'https://imgs.search.brave.com/bPO-ko4qR8Ak6BzRq5x_yWy0VAbqZQgrocW9hBbf8ck/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmNo/emJnci5jb20vZnVs/bC80OTUzNDI4NDgw/L2g3Mzk0MzczQS9n/dXN0YS1yaHltZXM', name: 'MC Python' },
  ];

  recentlyPlayed = [
    { image: 'path-to-image5.jpg', name: 'Song 1' },
    { image: 'path-to-image6.jpg', name: 'Song 2' },
    // Agrega más canciones recientes aquí
  ];

}
