<template>
  <div>
    <div class="header">
      <h1 class="header-text">(주) OpenSG</h1>
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
            <!-- name: ''를 설정해주면 이에 해당하는 라우트 정보를 찾아 그 path로 설정해준다. 여기서는 /home -->
          </li>
          <li>
            <router-link v-bind:to="{ name: 'about' }">About</router-link>
            <!-- 객체를 바인딩 하므로 v-bind 디렉티르를 이용한다. -->
          </li>
          <li>
            <router-link :to="{ name: 'contacts' }">Contacts</router-link>
            <!-- 근데 왜 개발자 도구로 보면 #/contacts 이런식으로 등록이 돼있을까? 궁금하넹... -->
          </li>
        </ul>
      </nav>
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import ContactByNo from './components/ContactByNo';
import NotFound from './components/NotFound';
import VueRouter from 'vue-router';

/*
  명명된 라우트(Named Routes):
  라우트 정보에 고유한 이름을 부여하는 것이다. 이것을 사용할 경우 URI 경로가 아닌 부여된 라우트 이름(Route Name)
  으로 내비게이션하도록 할 수 있다. 복잡한 URI 경로가 만들어질 때 전체 경로(path) 를 입력해야 하지만 명명된 라우트
  를 사용하면 좀 더 간단하게 입력할 수 있다. 또한 URI 경로가 바뀓라도 애플리캐이션에서의 내비게이션 정보는 바뀌지 않는다.
*/

/*
  VueRouter 객체의 기본 설정 모드는 해시 모드(hash mode)이다. URL에서 해시(#)기호 다음의
  경로는 경로가 페이지 내부의 이름으로 여겨지기 때문에 해시 이후의 경로가 바뀌더라도 페이지가 다시
  로드되지 않는다.

  해시모드를 제거하면 URL을 요청할때 해당하는 라우트가 존재하지 않아도 오류가 발생하지 않는다.
  404 오류가 발생할 수 있지만 index.html과 같은 대체 경로가 존재하면 이 경로로 자동 이동 된다.
  따라서 화면에 오류 메시지가 나타나지 않는다.
  
  잘몬된 경로가 사용될경우 오류메시지를 나타내려면 catch-all 라우트와 오류 메시지를 보여줄 컴포넌트를
  추가하면 된다.
*/

const router = new VueRouter({
  mode: 'history', // 해시를 제거하는 옵션
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },

    {
      path: '/about',
      name: 'about', // name 옵션은 필수 지정 항목은 아니지만 각각의 라우트 정보마다 고유한 값을 지정해야 한다.
      component: About,
    },

    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
      children: [
        {
          path: ':no', // /:no 이렇게하면 동작을 안한다 ㅋㅋ
          name: 'contactByNo',
          component: ContactByNo,
          beforeEnter(to, from, next) {
            console.log('@@ beforeEnter! : ' + from.path + '-->' + to.path);
            if (from.path.startsWith('/contacts')) return next();
            next('/home');
          },
        },
      ],
    },
    {
      path: '*', // '/*' 이렇게 해도 되긴 하네 ** 이것도, */ 이것도 ***/*** 이것도, *asfs 이건 안됨
      component: NotFound,
    },
  ],
});

/*
  애플리케이션의 인증 처리에 내비게이션 보호 기능을 사용할 수 있다.
  전역 내비게이션 보호 메서드인 beforeEach() 에서 사용자의 인증 여부를 확인하고
  인증하지 않았거나 접근 권한이 없다면 로그인화면으로 전환시키도록 next() 메서드를 이용할 수 있다.
*/
router.beforeEach((to, from, next) => {
  console.log('** beforeEach!!');
  next(); // 호출해야 다음 훅으로 진행된다.
});

router.afterEach(() => {
  console.log('** afterEach!!');
});

export default {
  name: 'app',
  router,
};
</script>

<style scoped>
.header {
  background-color: aqua;
  padding: 10px 0 0 0;
}
.header-text {
  padding: 0 20px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: purple;
}
li {
  float: left;
}
li a {
  display: block;
  color: yellow;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: aqua;
  color: black;
}
</style>
