import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import styles from './FAQ.module.css';
import Typography from "@material-ui/core/Typography";

export default () => {
    return (
        <div className={styles.root}>
            <Card className={styles.card}>
                <CardContent>
                    <Typography classes={styles.title}>
                        В чем предназначение ресурса?
                    </Typography>
                    <hr/>
                    <Typography className={styles.description}
                                color="textSecondary"
                    >
                        Данный ресурс предназначен для получения базовых и углубленных навыков работы с языком SQL.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardContent>
                    <Typography classes={styles.title}>
                        Для кого подойдут эти курсы?
                    </Typography>
                    <hr/>
                    <Typography className={styles.description}
                                color="textSecondary"
                    >
                        Платформа может использоваться для подготовки специалистов высшего, среднего профессионального и дополнительного профессионального образования, а также всеми желающими освоить SQL.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardContent>
                    <Typography classes={styles.title}>
                        Зачем разработчику изучать базы данных?
                    </Typography>
                    <hr/>
                    <Typography className={styles.description}
                                color="textSecondary"
                    >
                        Базы данных — это организованная специальным образом структура, которая умеет хранить, обрабатывать и изменять информацию в различных объемах.
                        Если вы будете делать веб-приложение — например интернет-магазин, блог или игры, — почти наверняка вы столкнётесь с базой данных.
                    </Typography>
                </CardContent>
            </Card>
            <Card className={styles.card}>
                <CardContent>
                    <Typography classes={styles.title}>
                        Почему именно SQL?
                    </Typography>
                    <hr/>
                    <Typography className={styles.description}
                                color="textSecondary"
                    >
                        SQL — языка для общения с базами данных.
                        Зная синтаксис написания SQL-запроосов, вы сможете работать с любой СУБД: SQLite, MySQL, PostgreSQL, Microsoft SQL Server, Oracle.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
