import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = new BehaviorSubject<string>('en');

  constructor(private translateService: TranslateService) {}

  setLanguage(lang: string) {
    this.translateService.use(lang);
    this.currentLang.next(lang);
  }

  getLanguage() {
    return this.currentLang.asObservable();
  }
}