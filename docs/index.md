---
outline: deep
---

<script setup>
import { computed } from 'vue';

const formatPeriod = t => {
    if (typeof t === 'string') {
        t = Number(t);
    }
    t = t / 1000;
    let days = Math.floor(t / (60 * 60 * 24));
    t = t % (60 * 60 * 24);
    let hours = Math.floor(t / (60 * 60));
    t = t % (60 * 60);
    let minutes = Math.floor(t / 60);
    t = t % 60;
    let seconds = Math.floor(t);
    return {
        days,
        hours,
        minutes,
        seconds,
    };
};


const targetDate = new Date('2024/02/09').getTime();

const now = new Date();
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
now.setMilliseconds(0);

const remain =  targetDate - now.getTime();

const { days } = formatPeriod(remain);

</script>

# Home

### 除夕倒计时
<pre v-if="days > 0">距离除夕还剩 <strong>{{ days }}</strong> 天</pre>
<pre v-else-if="days === 0">Happy New Year</pre>
<pre v-else>收拾行李，准备出门去打工</pre>


### 介绍

使用vitepress构建，并部署在github pages。
#
此文档内所有内容皆为个人学习记录，转载请说明


