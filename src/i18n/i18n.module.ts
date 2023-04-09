import { Module } from '@nestjs/common';
import { AcceptLanguageResolver, QueryResolver, I18nModule as i18nModule } from 'nestjs-i18n';
import { join } from 'path';

@Module({
    imports: [
        i18nModule.forRoot({
            fallbackLanguage: 'en',
            loaderOptions: {
                path: join(__dirname, 'dictionary'),
                watch: true,
            },
            resolvers: [{ use: QueryResolver, options: ['lang'] }, AcceptLanguageResolver],
        }),
    ],
    exports: [i18nModule],
})
export class I18nModule {}
