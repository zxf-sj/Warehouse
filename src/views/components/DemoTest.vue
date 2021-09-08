<template>
  <div>
    <div v-for="item in dataList" :key="item.id">
      <img v-lazy="item.href" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          id: 1,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 2,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 3,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 4,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 5,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 6,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 7,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 8,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 9,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 10,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 11,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
        {
          id: 12,
          href: "https://seikim.com/i/2021/09/07/fsaeq2.png",
        },
      ],
    };
  },
};
</script>