import { Component } from '@angular/core';
import { Book } from '../../types/ book';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.css'],
})
export class ListpageComponent {
  bookForm: Book = {
    name: '',
    detail: '',
    evaluation: 0,
  };

  bookList: Book[] = [
    {
      name: '呪術廻戦',
      detail:
        '呪い。辛酸・後悔・恥辱....。人間の負の感情から生まれる。禍々しきその力は、人を死へと導く。',
      evaluation: 10,
    },
    {
      name: '怪獣8号',
      detail:
        '怪獣発生率が世界屈指の日本。この国は、容赦無く怪獣が日常を侵していた。',
      evaluation: 9,
    },
    {
      name: 'アオサシ',
      detail:
        '愛媛に暮らす中学3年生。将来日本のサッカーに革命を起こすことになる少年の運命は ！？',
      evaluation: 8,
    },
    {
      name: '株式会社マジルミエ',
      detail:
        '"魔法少女"---それは自然災害の一種「怪異」の退治業務を請け負う職業。',
      evaluation: 7,
    },
    {
      name: 'SPYxFAMILY',
      detail:
        '世界核国が表面化で熾烈な情報戦を繰り広げていた時代。世界の平和は託された---。',
      evaluation: 9,
    },
    {
      name: '金色のガッシュ！！',
      detail:
        '魔界の王を決めるため、100名の魔物の子供達が人間とコンビを組み、最後の一組になるまで戦う。',
      evaluation: 7,
    },
  ];

  addToBookList(): void {
    //値渡し スプレッド構文
    this.bookList.push({ ...this.bookForm });
  }

  deleteFromBookList(index: number): void {
    this.bookList.splice(index, 1);
  }
}
