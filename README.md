# detox-tutorial

React Native e2e Testing 도구인 [detox](https://wix.github.io/Detox/) 사용 방법을 연습하기 위한 저장소 입니다.

## Getting Started

### Install

```zsh
$ git clone https://github.com/ssayebee/detox-tutorial # clone repo

$ cd detox-tutorial

$ yarn # install dependancy

$ yarn global add detox-cli # install detox cli
```

## Setting Android (SDK, env, emulator etc..)

[Setting Up an Android Development & Testing Environment](https://wix.github.io/Detox/docs/introduction/android-dev-env) 안드로이드 에뮬레이터 실행을 위해 설정을 진행합니다.

## Setting For Test

자신의 환경에 맞게 `.detoxrc.json` 파일을 수정 합니다.

### emulator로 테스트를 실행 하는 경우

터미널에 `emulator -list-avds` 명령어를 입력해 설치된 avd의 이름으로 **avdName** 값을 변경합니다.

```
  ...
  "devices": {
    ...
    "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_3a_API_30"
      }
    },
  },
```

### USB로 연결된 디바이스로 테스트를 실행하는 경우

터미널에서 `adb devices` 명령어를 입력해 연결된 adb의 이름으로 **adbName** 값을 변경합니다.

```
  ...
  "devices": {
    ...
    "device": {
      "type": "android.attached",
      "device": {
        "adbName": "R39M20BGYFE"
      }
    }
  },
```

## Run Test

### 1. build project

`{configurations}`는 `.detoxrc.json`의 값을 참조합니다. 설정되어 있는 `configurations`은 `android`, `device`가 있습니다.

```zsh
# $ detox build -c {configurations}
$ detox build -c android # device가 emulator로 설정된 app을 build 합니다.
```

### 2. run metro server

metro server를 실행합니다.

```zsh
# 실제 device로 테스트 하는 경우 (optional)
$ adb reverse tcp:8081 tcp:8081

$ yarn start
```

### 3. run test

테스트 실행하기

```zsh
# $ detox test -c {configurations}
$ detox test -c android # configurations에 android로 등록된 app을 테스트 합니다.
```

현재 모든 테스트가 실패하게 되어있습니다. `e2e/firstTest.e2e.ts` 의 스팩에 맞취서 모든 테스트가 통과하게 `App.tsx` 파일을 수정합니다.
