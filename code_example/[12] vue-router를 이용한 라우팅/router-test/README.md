# router-test

## 내비게이션 보호

프로그래밍 방식으로 라우팅을 제어하는 방법으로 내비게이션 보호(Navigation Guards) 기능이 있다. 이 기능은 다른 경로로 리다이렉션 하거나 내비게이션을 취소하여 애플리케이션의 내비게이션을 보호하는데 사용된다.

내비게이션 보호 기능은 전역 수준, 라우트 정보 수준, 컴포넌트 수준에서 사용할 수 있다.
다음은 전역 수준에서 사용하는 방법이다.

> 전역 수준

```javascript
const router = new VueRouter({ ... });

router.beforeEach((to, from, next) => {
  // ...
});

router.afterEach((to, from) => {
  // ...
})
```

전역 수준에서의 내비게이션 보호는 라우팅이 일어나기 전에 실행되는 `beforeEach` 메서드와 라우팅이 일어난 후의 `afterEach` 메서드로 나눌 수 있다. 각 함수에 전달딘 인자 함수로 `to, from, next`의 파라미터를 사용할 수 있다.

`to` 파라미터로 전달되는 값은 이동하려는 대상 Route 객체이다. `from`은 이동하기 전의 `Route` 객체이다. `/from`에서 `/to`로 이동하는 상황이라고 생각하면 된다. `next`는 함수형이다. `next`를 이용하면 다음과 같은 작업을 수행할 수 있다.

- `next()`: 다음 이벤트 훅으로 이동시킨다. 이 함수를 호출하지 않으면 다음 이벤트 훅으로 이동하지 않는다.

- `next(false)`: 현재 내비게이션을 중단한다. from 라우트 객체의 URL로 재설정된다.

- `next(경로)`: 지정된 경로로 리다이렉션 한다. 현재의 내비게이션이 중단되고 새로운 내비게이션이 시작된다.

- `next(error)`: next에 전달된 인자가 Error 객체라면 내비게이션이 중단되고 `router.onError()`를 이용해 등록된 콜백에 에러가 전달된다.

`next` 파라미터는 `beforeEach()` 등 라우팅이 일어나기 전에만 사용할 수 있으며 내비게이션의 중단, 진행, 다른 경로로의 이동과 같은 작업을 결정할 수 있다.

> 라우트 정보 수준

라우트별 보호 기능을 사용하기 위해서 VueRouter 객체 안의 라우트 정보에 beforeEnter 메서드를 작성한다. 간단한 형식을 살펴보자.

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/contacts/:no',
      component: ContactByNo,
      beforeEnter: (to, from, next) => {},
    },
  ],
});
```

> 컴포넌트 내부

컴포넌트 내부에서는 Vue 인스턴스 라이프 사이클에 살펴보았던 라이프 사이클 훅(이벤트 훅) 과 동일한 방법으로 내비게이션 보호 기능을 사용할 수 있다.

```javascript
const Foo = {
  template: `...`,
  beforeRouteEnter(to, from, next) {},
  beforeRouteLeave(to, from, next) {},
  beforeRouteUpdate(to, from, next) {},
};
```

- `beforeRouteEnter`: 렌더링하는 라우트 이전에 호출되는 훅이다. 이 훅이 호출되는 시점에는 Vue 인스턴스가 만들어지지 않았기 때문에 this를 이용할 수 없다는 점에 주의해야 한다.

- `beforeRouteLeave`: 현재 경로에서 다른 경로로 빠져나갈 때 호출되는 훅이다.

- `beforeRouteUpdate`: 이미 렌더링된 컴포넌트의 경로가 변경될 때 호출되는 훅이다. 이미 현재 컴포넌트의 Vue 인스턴스가 만들어져 있어서 재사용될 때는 `beforeRouteEnter` 훅은 호출되지 않고 `beforeRouteUpdate` 훅이 호출된다. 이 훅 대신에 `$route` 옵션에 대해 관찰 속성(watched property)를 사용할 수 있다.

만약 `beforeRouteEnter` 에서 Vue 인스턴스를 이용하고 싶다면 콜백 함수를 이용해 비동기 처리를 수행해야 한다. next 함수를 이용해 콜백 함수를 전달한다.

```javascript
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // vm이 생성된 vue 인스턴스를 참조한다.
    })
  }
```

전체 내비게이션 보호 기능의 실행 흐름은 다음과 같다.

- 내비게이션 시작

- 비활성화된 컴포넌트가 있다면 보호 기능 호출

- 전역 수준의 beforeEach 호출

- 재사용되는 컴포넌트의 beforeRouteUpdate 훅 호출

- 라우트 정보 수준의 beforeEnter 호출

- 활성화된 컴포넌트에서 beforeRouteEnter 훅 호출

- 내비게이션 완료

- 전역 afterEach 훅 호출

- DOM 갱신 트리거됨

- 인스턴스들의 beforeRouteEnter 훅에서 next에 전달된 콜백 호출(콜백 사용시에만)
