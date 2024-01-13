import { Component } from '@angular/core';
import { LanguageService } from './../../../../mfe-shared/projects/mfe-shared-lib/src/lib/services/language.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

  constructor(private languageService: LanguageService,
    private translateService: TranslateService) {}

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  isNotLang(lang: string): boolean {
    return this.translateService.currentLang !== lang;
  }
}
