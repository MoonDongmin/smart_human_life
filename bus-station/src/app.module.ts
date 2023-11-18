import {Module}        from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService}    from "./app.service";
import {BusModule}     from "./bus/bus.module";
import {ConfigModule}  from "@nestjs/config";

@Module({
    imports: [
        BusModule,
        ConfigModule.forRoot({}),
        // TypeOrmModule.forRoot({
        //         type: "postgres",
        //         host: "localhost",
        //         port: 5432,
        //         username: "postgres",
        //         password: "postgres",
        //         database: "bus",
        //         entities: [__dirname + "/*.entity.*"],
        //         synchronize: true,
        //         logging: true,
        //     },
        // ),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
