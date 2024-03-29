import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateService } from '@ngx-translate/core';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../../mfe-shared/projects/mfe-shared-lib/src/lib/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  
  destroyRef = inject(DestroyRef);

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService) {

      this.initLanguage();
  }

  ngOnInit(): void {
    // this.initLanguage();
  }

  initLanguage(): void {
    this.languageService.getLanguage().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(lang => {
      this.translate.setDefaultLang(lang);
      this.translate.use(lang)
    })
  }
}
