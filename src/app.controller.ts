import { Controller, Get } from '@nestjs/common';
import { I18n, I18nContext, I18nLang } from 'nestjs-i18n';

@Controller()
export class AppController {
    @Get()
    async getHello(@I18n() i18n: I18nContext, @I18nLang() lang: string) {
        return i18n.t('test.HELLO', { lang });
    }
}
